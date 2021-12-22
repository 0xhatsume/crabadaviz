import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';

function App() {


  const data = {
    nodes: [{id: "1"},{id: "2"},{id: "3"},{id: "4"}],
    links: [{ "source": "1", "target": "2" },{ "source": "1", "target": "3" },{ "source": "3", "target": "4" },]
  }
  return (
    <div className="App">
      Simple Force Graph First
      <ForceGraph2D
        graphData={data}
      />
    </div>
  );
}

export default App;
