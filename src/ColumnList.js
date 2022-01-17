import React from 'react'
import './App.css'
import DataSourceItem from './DataSourceItem'
import { useDrag } from 'react-dnd';


function ColumnList (props)  {

   
        return (
        <div className='column'>           
        <h1>Data sources</h1>
        <ul className='datasource' >
          {props.datasources.map((datasource) => <DataSourceItem key = {datasource.name} item ={datasource} ></DataSourceItem>)}
        </ul>
      
      
      </div>


                        
        )
    }
export default ColumnList
   
const TOOL = 'tool';


// function Tool  ({ name })  {
//     console.log("thisssssssssss iss nameee",name)
//   const [, drag] =useDrag({
//     type: TOOL,
//     item: () => ({name})
//   });
//   return (
//     <div className="tool" ref={drag}>
//       {name}
//     </div>
//   );
// }

// function  ListTools (props) {
//   return (
//     <div className="tool-wrapper">
//       {props.datasources.map(item => (<Tool  key ={item.name} name={item.name} />))}
//     </div>
//   );
// }

// export default ListTools;

