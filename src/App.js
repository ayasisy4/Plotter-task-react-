import React, { useState, useEffect } from "react";
import * as DataAPI from "./DataAPI.js";
import "./App.css";
import ColumnList from "./ColumnList";
import ListTools from "./ColumnList";
import Container from "./container.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function PlotterApp() {
  const [columns, setColumns] = useState([]);

  useEffect(
    () =>
      DataAPI.getAllColumns().then((res) => {
        setColumns(res);
      }),
    []
  );

  console.log(columns);

  return (
    <DndProvider backend={HTML5Backend}>
     
      <div className="app-wrapper">
        <ColumnList datasources={columns} />
        {/* <ListTools datasources={columns} /> */}
        <div className="column">
        <Container datasourcetype = {'dimension'} />
        <Container datasourcetype = {'measure'} />
        </div>

      </div>
    </DndProvider>
  );
}
export default PlotterApp;
