import React, { Component } from 'react';
import Task from '../components/Task';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { getTasks, postTask, putTask, deleteTask } from '../actions/tasks';
import '../styles/index.css';

class App extends Component {

    componentDidMount() {
        this.props.getTasks(JSON.parse(localStorage.getItem('tasks')) || undefined);
    }

    render() {
        const { tasks, postTask, putTask, deleteTask } = this.props;

        return (
            <>
                <Form action={ postTask } 
                      options={ { buttonValue: 'Create' } } />

                {tasks && tasks.length 
                    ? tasks.map((task, index) => ( <Task key={ index } props={ { task, putTask, index, deleteTask } } /> )) 
                    : <p>Список задач пуст.</p>
                }
            </>
        );
    }
}

export default connect(state => ({ tasks: state }), { getTasks, postTask, putTask, deleteTask })(App);

