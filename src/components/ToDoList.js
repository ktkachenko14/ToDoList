import React from 'react';
import './ToDoItem.css';
import {TODOSDATA} from '../todosData.js';

export default class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [...TODOSDATA]
        }

        this.changeList = this.changeList.bind(this);
    }

    changeList(itemId) {
      let item = this.state.list.find(i=> i.id === itemId);
      item.completed = !item.completed;
      this.setState({
          list: [...this.state.list]
      });
    }

    render() {
        return (
            <div>
                <ul className="list">
                    {this.state.list.map(item => <ToDoItem todoInfo = {item}/>)}
                </ul>
            </div>
        )
    }
}
/*function ToDoItem(props){

    return(
       <ul className="list">
            <li>
                <input id="check" type="checkbox" checked={props.info.completed} className="toDo"></input>
                <p className="toDo">{props.info.text}</p>
            </li>
        </ul>
        
    );
    
}*/


//export default ToDoItem;