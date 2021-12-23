import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';

function App() {


  const data = {
    nodes: [{id: "1"},{id: "2"},{id: "3"},{id: "4"}, {id:"5"},{id:"6"},{id:"7"}],
    links: [{ "source": "1", "target": "2" },
            { "source": "1", "target": "3" },
            { "source": "3", "target": "4" },   
            {"source": "5", "target": "6"},
            {"source": "5", "target": "7"},
          
          ]
  }
  return (
    <div className="App">
      Simple Force Graph Firsts ...
      <ForceGraph2D
        graphData={data}
        dagMode={'lr'}
        nodeId="id"
      />
    </div>
  );
}

export default App;
