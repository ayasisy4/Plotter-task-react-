import React, { useState, useEffect } from "react";
import "../App.css";
import * as DataAPI from "../APIS/DataAPI.js";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";


function LineChart(props) {
  const [xaxis, setxaxis] = useState([]);
  const [yaxis, setyaxis] = useState([]);
  const randomColors = Array(props.measures.length).fill(0).map((x)=>Math.floor(Math.random()*16777215).toString(16));

  useEffect(() => {
    
    if (props.dimension && props.measures) {
      DataAPI.getData({
        measures: props.measures,
        dimension: props.dimension,
      }).then((res) => {
        setxaxis(res[0]);
        setyaxis(res.slice(1));
      });
    }
  }, [props.measures, props.dimension]);
  const graphdata = {
    labels: xaxis.values,
    datasets: yaxis.map((y,index) => ({
      label: y.name,
      backgroundColor: `#${randomColors[index]}`, // make this random
      borderColor: "rgba(0,0,0,1)", // make this random
      borderWidth: 2,
      data: y.values,
      xAxisId: xaxis.name
    })),
  };
  
  const options = {
    scales: {
     x:{
       display:true,
       title:{
         display:true,
       text: xaxis.name, color: 'black',
       font: {
         family: 'Comic Sans MS',
         size: 20,
         weight: 'bold',
         lineHeight: 1.2,
       },
       padding: {top: 10, left: 0, right: 0, bottom: 0}

     }},
     y:{
      display:true,
      title:{
        display:true,
      text: "Value", color: 'black',
      font: {
        family: 'Comic Sans MS',
        size: 20,
        weight: 'bold',
        lineHeight: 1.2,
      },
      padding: {top: 10, left: 0, right: 0, bottom: 0}

    }}
      
    
    },
  };

  return xaxis && yaxis && <Line data={graphdata} options={options}   />;
}
export default LineChart;
