import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

function Container (props) {
  const [boxes, setBoxes] = useState([]);

  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: props.datasourcetype,
    canDrop: () => true,
    drop: item => {
      if (isOverCurrent) {
        setBoxes([...boxes, item]);
      }
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  });

  return (
    <div className='container'>
        <p>{props.datasourcetype}</p>
      {boxes.map(member => (
          <div className="box">
            {member.name}
          </div>
      ))}
      <div className={`drop-area ${canDrop ? 'highlight': ''}`} ref={drop}>
        Drag here
      </div>
    </div>
  );
}

export default Container;
