import React from 'react';
//import ToDoItem from './ToDoItem';

class ToDoItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const { text} = this.props.item;
        return(
            <div>
             
                <p className="toDo">{text}</p>
            </div>
        )
    }
}




export default ToDoItem;