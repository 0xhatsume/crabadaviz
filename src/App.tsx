import React from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import dag from './data/reactforcegraph.json';

function hoverLabel(n:any){
  return `<div>
            <p>crab: ${n.id} </p>
            <p>owner: ${n.owner}</p>
            <p>class: ${n.class_name} </p>
            <p>breed_count: ${n.breed_count} </p>
          </div>`
}

function App() {


  // const data = {
  //   nodes: [{id: "1"},
  //           {id: "2"},
  //           {id: "3"},
  //           {id: "4"}, 
  //           {id:"5"},
  //           {id:"6"},
  //           {id:"7"}
  //         ],
  //   links: [{ "source": "1", "target": "2" },
  //           { "source": "1", "target": "3" },
  //           { "source": "3", "target": "4" },   
  //           {"source": "5", "target": "6"},
  //           {"source": "5", "target": "7"},
          
  //         ]
  // }

  return (
    <div className="App">
      Simple Force Graph Firsts ...
      <ForceGraph2D
        graphData={dag}
        
        
        nodeId="id"

        nodeRelSize={3}
        nodeLabel={hoverLabel}
        nodeAutoColorBy="class_name"
        
        linkDirectionalParticles={1}
        dagMode={'td'}
        d3VelocityDecay={0.3}
      />
    </div>
  );
}

export default App;
