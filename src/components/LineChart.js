import React, { useState, useEffect } from "react";
import "../App.css";
import * as DataAPI from "../APIS/DataAPI.js";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function LineChart(props) {
  const [xaxis, setxaxis] = useState([]);
  const [yaxis, setyaxis] = useState([]);

  useEffect(() => {
    if (props.dimension && props.measures.length) {
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
    datasets: yaxis.map((y) => ({
      label: y.name,
      backgroundColor: "rgba(75,192,192,1)", // make this random
      borderColor: "rgba(0,0,0,1)", // make this random
      borderWidth: 2,
      data: y.values,
    })),
  };
  
  const options = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            fontColor: "red",
            fontSize: 55,
            labelString: xaxis.name,
          },
        },
      ],
    },
  };

  return xaxis && yaxis && <Line data={graphdata} options={options} />;
}
export default LineChart;
