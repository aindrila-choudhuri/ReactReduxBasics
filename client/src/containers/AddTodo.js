import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component {
    
    constructor(props) {
        super(props);
        this.input = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.input.value.trim()) {
            return
        }
        this.props.addTodoFunc(this.input.value);
        this.input.value = ''
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <input ref={node => (this.input = node)} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoFunc: (value) => dispatch(addTodo(value))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)