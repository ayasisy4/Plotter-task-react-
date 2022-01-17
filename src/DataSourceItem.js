import React from 'react'
// import { useDrag } from 'react-dnd';



class DataSourceItem extends React.Component{

    render() {
        return (
            <li key={this.props.id} className="datasource" >

             <p> {this.props.name} </p>
            </li>
          );
        }
    }

export default DataSourceItem