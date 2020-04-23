import React from 'react';
import './ToDoItem.css';

function ToDoItem(props){

    return(
       <ul className="list">
            <li>
                <input id="check" type="checkbox" checked={props.info.completed} className="toDo"></input>
                <p className="toDo">{props.info.text}</p>
            </li>
        </ul>
        
    );
    
}


export default ToDoItem;