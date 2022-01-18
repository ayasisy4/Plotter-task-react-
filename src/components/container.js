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
    <div key = {props.datasourcetype}>
      <p>{props.datasourcetype}</p>
      <div 
      className={`card ${canDrop ? "highlight" : ""}`}
       ref={drop}
   
      >
         <div style={{ display: "flex",flexWrap:'wrap' }}>
          {boxes.map((member,indx) => (
            <div key={indx} className="box">{member}</div>
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
