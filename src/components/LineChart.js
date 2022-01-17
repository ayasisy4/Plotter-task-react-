import React, { useState, useEffect } from "react";
import "../App.css";
import * as DataAPI from "../DataAPI.js";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function LineChart(props) {
  const [res, setRes] = useState([]);
  const [xaxis, setxaxis] = useState([]);
  const [yaxis, setyaxis] = useState([]);

  useEffect(() => {
    console.log("I AMMMM INNNN LINEEEEE CHARTTTTT");
    console.log("thisss iss proooooops ", props.measures, props.dimension);
    DataAPI.getData({
      measures: props.measures,
      dimension: props.dimension,
    }).then((res) => {
      setRes(res);
      setxaxis(res[0]["values"]);
      setyaxis(res[1]["values"]);
      console.log("RESULLLLLLLLLLLLT:::: ", res);
    });
    console.log(xaxis, yaxis, "hereeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  }, [props.measures]);

  const graphdata = {
    labels: xaxis,
    datasets: [
      {
        label: ["name name"],
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: yaxis,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return res && <Line data={graphdata} options={options} />;
}
export default LineChart;
