import React, { useState, useEffect } from "react";
import * as DataAPI from "./APIS/DataAPI.js";
import "./App.css";
import ColumnList from "./Components/ColumnList";
import Container from "./Components/container.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LineChart from "./Components/LineChart.js";

function PlotterApp() {
  const [columns, setColumns] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [dimension, setDimension] = useState();

  useEffect(
    () =>
      DataAPI.getAllColumns().then((res) => {
        setColumns(res);
      }),
    []
  );


 

  return (
<DndProvider backend={HTML5Backend}>
      <div className="app-wrapper">
        <ColumnList datasources={columns} />
        <div className="sub-wrapper">
        
          <Container key= "dimension" datasourcetype={"dimension"} onadd={setDimension} />
          <Container key = "measure" datasourcetype={"measure"} onadd={setMeasures} />
       
        <p>Plot</p>
        <div className="graph ">
          {dimension && measures && <LineChart measures={measures} dimension={dimension} />}
        </div>
        </div>
     
      </div>
    </DndProvider>
  );
}
export default PlotterApp;
