import React, { useState } from "react";
import { useDrop } from "react-dnd";

function Container(props) {
  const [boxes, setBoxes] = useState([]);

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: props.datasourcetype,
    canDrop: () => true,
    drop: (item) => {
      if (isOverCurrent) {
        if (props.datasourcetype === "dimension") {
          setBoxes([item.name]);
          props.onadd(item.name);
        } else {
          setBoxes([...boxes, item.name]);
          props.onadd([...boxes, item.name]);
        }
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });
  let clear = (e) => {
    e.preventDefault();
    setBoxes([]);
    if (props.datasourcetype === "dimension") {
      props.onadd();
    } else {
      props.onadd([]);
    }
  };

  return (
    <div className={`${canDrop ? "highlight" : ""}`} ref={drop}>
      <p>{props.datasourcetype}</p>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div className="smallcard">
          {boxes.map((member) => (
            <div className="box">{member}</div>
          ))}
        </div>
        <button onClick={(e) => clear(e)} className="button">
          clear
        </button>
      </div>
    </div>
  );
}

export default Container;
