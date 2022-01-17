import React from "react";
import "../App.css";
import DataSourceItem from "./DataSourceItem";
import { useDrag } from "react-dnd";

function ColumnList(props) {
  return (
    <div className="column">
      <h1>Data sources</h1>
      <ul className="datasource">
        {props.datasources.map((datasource) => (
          <DataSourceItem
            key={datasource.name}
            item={datasource}
          ></DataSourceItem>
        ))}
      </ul>
    </div>
  );
}
export default ColumnList;
