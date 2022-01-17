import React from 'react'
import { useDrag } from 'react-dnd';


const DATASOURCEITEM = 'DataSourceItem';

function DataSourceItem (props) {
    
    console.log("this is naaaameeee",props.item)

    const [, drag] = useDrag({
        type: props.item.function,
            item: () => (props.item)
      });

        return (
            <li key={props.item.name} className="datasource" ref={drag} >


             <p> {props.item.name} </p>
            </li>
          );
        }


export default DataSourceItem