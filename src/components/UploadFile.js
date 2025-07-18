import React, { useState } from 'react'
import JsonGraph from '../utils/JsonGraph';

function UploadFile() {

    const [jsonData, setJsonData] = useState(null);

    const HandlerFileUpload = (e) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            try{
                const json = JSON.parse(event.target.result);
                setJsonData(json);
            }catch(err){
                alert('Invalid Json File');
            }
        };
        reader.readAsText(e.target.files[0]);
    };

  return (
    <div className='container-upload'>
      <h1>JSON Graph Visualizer</h1>
      <input type="file" accept=".json" onChange={HandlerFileUpload}/>
      {jsonData && <JsonGraph json={jsonData}/>}
    </div>
  )
}

export default UploadFile
