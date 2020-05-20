import React from 'react';
//import {TODOSDATA} from '../todosData';
import ToDoItem from './ToDoItem';


function Main(){
    //const todosData = TODOSDATA.map(todo => <ToDoItem key={todo.id} info={todo} />);
    return(
        <div>
            <ToDoItem/>
        </div>
    );
}

export default Main;