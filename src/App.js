import React from 'react';

import Draggable from './components/graph/draggablePie';
import SemiPie from './components/graph/semiPie';
import XYChart from './components/graph/xyGraph';
import BarChart from './components/graph/barChart';
import ThreeDPie from './components/graph/3dPie';
import PieOfPie from './components/graph/pieOfPie';
import BentGant from './components/graph/bent-gantt-chart';
import Fishbone from './components/graph/fishbone-timeline';
import DrillDownTreeMap from './components/graph/drill-down-treemap';
import Sankey from './components/graph/sankey';

import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Draggable />
        <SemiPie />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <XYChart />
        <BarChart />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <ThreeDPie />
        <BentGant />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <DrillDownTreeMap />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Fishbone />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Sankey />
      </div>
      {/* <SemiPie />
      <XYChart />
      <BarChart />
      <ThreeDPie />
      <BentGant />
      <Fishbone />
      <DrillDownTreeMap />s
      <Sankey /> */}
      {/* <PieOfPie />  */}
    </div>
  );
}

export default App;
