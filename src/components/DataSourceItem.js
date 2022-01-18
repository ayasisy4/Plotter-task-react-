import React from "react";
import { useDrag } from "react-dnd";

const DATASOURCEITEM = "DataSourceItem";

function DataSourceItem(props) {
  const [, drag] = useDrag({
    type: props.item.function,
    item: () => props.item,
  });

  return (
    <li
      key={props.item.name}
      className="datasource"
      id={props.item?.function === "measure" ? "dimension" : "measure"}
      ref={drag}
    >
      <p> {props.item.name} </p>
    </li>
  );
}

export default DataSourceItem;
