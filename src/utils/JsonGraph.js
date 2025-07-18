import React from 'react'
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { ParseJsonToGraph } from './ParseJsonToGraph';



function JsonGraph() {

 const { nodes, edges } = useMemo(() => ParseJsonToGraph(json), [json]);


  return (
    <div style={
        {
            height: '80vh', width:'100%'
        }
    }>
      <ReactFlow nodes={nodes} edges={edges} fitView/>
    </div>
  )
}

export default JsonGraph
