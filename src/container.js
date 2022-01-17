import React, { useState } from 'react';

function Container () {
//   const [boxes, setBoxes] = useState([]);

//   const [{ canDrop, isOverCurrent }, drop] = useDrop({
//     accept: 'tool',
//     canDrop: () => true,
//     drop: item => {
//       if (isOverCurrent) {
//         setBoxes([...boxes, item]);
//       }
//     },
//     collect: monitor => ({
//       canDrop: monitor.canDrop(),
//       isOverCurrent: monitor.isOver({ shallow: true })
//     })
//   });
  return (
    <div className='container'>
      {/* {boxes.map(member => (
          <div className="box">
            {member.name}
          </div>
      ))}
      <div className={`drop-area ${canDrop ? 'highlight': ''}`} ref={drop}>
        Drag here
      </div> */}
    </div>
  );
}

export default Container;
