import React from 'react';
import {connect} from 'react-redux';

class ListTodo extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map((todo) => 
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ListTodo)