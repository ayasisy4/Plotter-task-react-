import React, { useState, useEffect } from "react";
import * as DataAPI from "./DataAPI.js";
import "./App.css";
import ColumnList from "./components/ColumnList";
import ListTools from "./components/ColumnList";
import Container from "./components/container.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LineChart from "./components/LineChart.js";

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

  // const fetchalldata = (e)=>{
  //   e.preventDefault();

  //   DataAPI.getData({ "measures": measures, "dimension": dimension }).then(
  //     (res) => {
  //        console.log("RESULLLLLLLLLLLLT:::: ", res)
  //     }
  //   )
  // }

  const changeDimension = (newdimension) => {
    setDimension(newdimension);
    console.log(
      "Iam outsideeee and yess it changeddddd dimension:::::",
      dimension
    );
  };

  const changeMeasures = (newMeasure) => {
    setMeasures(newMeasure);
    console.log(
      "Iam outsideeee and yess it changeddddd measures:::::",
      measures
    );
  };

  console.log(columns);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-wrapper">
        <ColumnList datasources={columns} />
        {/* <ListTools datasources={columns} /> */}
        <div className="column">
          <Container datasourcetype={"dimension"} onadd={changeDimension} />
          <Container datasourcetype={"measure"} onadd={changeMeasures} />
        </div>
        <div className="container ">
          {measures && <LineChart measures={measures} dimension={dimension} />}
        </div>
        {/* <button
          onClick={(e)=>fetchalldata(e)}
          >clear</button> */}
      </div>
    </DndProvider>
  );
}
export default PlotterApp;
