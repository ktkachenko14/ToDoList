import ToDoList from "../components/ToDoList"
import { connect } from 'react-redux'
import { add } from "../actions/actionCreators"

function mapStateToProps(state) {
    return {
        items: state.todo.items
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addItem: (newItem) => dispatch(add(newItem))
    }
}


const ToDoListApp = connect(mapStateToProps, mapDispatchToProps)(ToDoList);


export default ToDoListApp