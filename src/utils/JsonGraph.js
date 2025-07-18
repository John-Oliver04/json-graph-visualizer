import React, { useMemo } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ParseJsonToGraph } from './ParseJsonToGraph';



function JsonGraph({json}) {

    const { nodes: initialNodes, edges: initialEdges } = useMemo(() => ParseJsonToGraph(json), [json]);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={
        {
            height: '80vh', width:'100%'
        }
    }>
     <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

export default JsonGraph
