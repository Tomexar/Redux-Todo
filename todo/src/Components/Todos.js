import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, deleteTodo } from '../Actions'


class Todos extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value })
    }
    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' })
    }

    toggleTodo = id => {
        this.props.toggleTodo(id);
    }

    deleteTodo = () => {
        this.props.deleteTodo();
    }

    render() {
        return (
            <div className='app'>
                <div className='todo-list'>
                    {this.props.todos.map(todo => (
                        <h4 onClick={() => this.toggleTodo(todo.id)} key={todo.id}>
                            {todo.name}
                            {todo.completed && <i class="fas fa-check-square"></i>}
                        </h4>
                    ))
                    }
                    <button onClick={() => this.deleteTodo()}><i class="fas fa-trash-alt"></i></button>
                </div>

                <input
                    type='text'
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                    placeholder='Add ToDo'
                />
                <button onClick={this.addTodo}>Add</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}



export default connect(
    mapStateToProps,
    { addTodo, toggleTodo, deleteTodo }
)(Todos)