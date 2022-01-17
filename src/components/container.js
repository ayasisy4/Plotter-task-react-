import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

function Container (props) {
  const [boxes, setBoxes] = useState([]);

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: props.datasourcetype,
    canDrop: () => true,
    drop: item => {
      if (isOverCurrent) {
        setBoxes([...boxes, item.name]);
        if(props.datasourcetype === 'dimension'){
            props.onadd(item.name)
 
        }
        else{
            props.onadd([...boxes,item.name])
        }
     
        console.log("thissssssss is item",item)

      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  });
  let clear = (e) => {
    e.preventDefault();
    setBoxes([])
  }

  console.log('this is boxess',boxes)

  return (
    <div className='container'>
        <p>{props.datasourcetype}</p>
      {boxes.map(member => (
          <div className="box">
            {member}
          </div>
      ))}
      <div className={`drop-area ${canDrop ? 'highlight': ''}`} ref={drop}>
        Drag here
      </div>
      <button
          onClick={(e)=>clear(e)}
          >clear</button>
    </div>
  );
}

export default Container;
