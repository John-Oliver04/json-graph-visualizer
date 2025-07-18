import dagre from 'dagre';

let nodeId = 0;
function generateId() {
  return `node-${nodeId++}`;
}

function traverse(value, parentId = null, path = '') {
  const nodes = [];
  const edges = [];

  const currentId = generateId();

  let label;
  if (typeof value === 'object' && value !== null) {
    label = Array.isArray(value) ? `${path}: [ ]` : `${path}: { }`;
  } else {
    label = `${path}: ${value}`;
  }

  nodes.push({
    id: currentId,
    data: { label },
    position: { x: 0, y: 0 }, // will be set by Dagre
    draggable: true,
  });

  if (parentId) {
    edges.push({
      id: `e-${parentId}-${currentId}`,
      source: parentId,
      target: currentId,
    });
  }

  if (typeof value === 'object' && value !== null) {
    for (const key in value) {
      const child = value[key];
      const { nodes: childNodes, edges: childEdges } = traverse(child, currentId, key);
      nodes.push(...childNodes);
      edges.push(...childEdges);
    }
  }

  return { nodes, edges };
}

export function ParseJsonToGraph(json, direction = 'TB') {
  nodeId = 0;
  const graph = new dagre.graphlib.Graph();
  graph.setDefaultEdgeLabel(() => ({}));
  graph.setGraph({ rankdir: direction }); // TB = Top to Bottom, LR = Left to Right

  const { nodes, edges } = traverse(json);

  // Set nodes for dagre layout
  for (const node of nodes) {
    graph.setNode(node.id, { width: 180, height: 40 }); // You can tweak dimensions
  }

  // Set edges for dagre layout
  for (const edge of edges) {
    graph.setEdge(edge.source, edge.target);
  }

  dagre.layout(graph);

  // Apply dagre-computed positions
  const layoutedNodes = nodes.map((node) => {
    const { x, y } = graph.node(node.id);
    return {
      ...node,
      position: { x, y },
    };
  });

  return {
    nodes: layoutedNodes,
    edges,
  };
}
