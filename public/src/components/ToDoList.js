import React from 'react'


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ''
        }
    }

    handleEvent(event) {
        const { value, type } = event.target;
        if (type === 'text') {
            this.setState({
                newItem: value
            })
        } else if (type === 'submit') {

            this.props.addItem(this.state.newItem)

            this.setState({
                newItem: ''
            })
        }
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center my-4">
                    <div>
                        <input onChange={(e) => this.handleEvent(e)} value={this.state.newItem} className="form-control" type="text"></input>
                        <button onClick={(e) => this.handleEvent(e)} className="btn btn-primary col-md-12">Add</button>
                    </div>

                </div>
                <div className="row justify-content-center">
                    <ul className="list-group col-md-4">
                        {this.props.items.map(x => <li className="list-group-item">{x}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}


export default ToDoList;