let nodeId = 0;

function generateId() {
  return `node-${nodeId++}`;
}

function traverse(value, parentId = null, path = '') {
  const nodes = [];
  const edges = [];

  const currentId = generateId();
  const label = Array.isArray(value) ? 'Array' : typeof value === 'object' ? 'Object' : `${value}`;
  
  nodes.push({ id: currentId, data: { label: path || label }, position: { x: Math.random() * 500, y: Math.random() * 500 } });

  if (parentId) {
    edges.push({ id: `e-${parentId}-${currentId}`, source: parentId, target: currentId });
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

export function ParseJsonToGraph(json) {
  nodeId = 0; // Reset ID counter each time
  return traverse(json);
}
