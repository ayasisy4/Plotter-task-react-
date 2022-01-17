import React, { useState, useEffect } from "react";
import * as DataAPI from "./DataAPI.js"
import './App.css';
import ColumnList from "./ColumnList";
import Container from "./container.js";


function PlotterApp() {
  const [columns, setColumns] = useState([]);

  useEffect(() => 
    DataAPI.getAllColumns().then( res=>{
      setColumns(res);
  }),[]);

  console.log(columns)

    return ( 
      <div className="app-wrapper">  
        
         <ColumnList datasources = {columns} />
         <Container/>
        
      </div> 
    ); 
}
export default PlotterApp;