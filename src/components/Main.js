import React from 'react';
import {TODOSDATA} from '../todosData';
import ToDoItem from './ToDoItem';

function Main(){
    const todosData = TODOSDATA.map(todo => <ToDoItem key={todo.id} info={todo} />);
    return(
        <div>
            {todosData}
        </div>
    );
}

export default Main;