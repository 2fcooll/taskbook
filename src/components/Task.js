import React from 'react';
import Form from './Form';

const Task = ({ props: { task, putTask, index, deleteTask } }) => {

    return (
        <div className='task'>
            <button onClick={ () => deleteTask(index) } className='task__button-remove'>&#10060;</button>
            <div>
                <h4 className='task__description'>{ task.description }</h4>
                <Form action={ putTask } options={ { buttonValue: 'Edit', index } }/>
            </div>
        </div>
    );
}

export default Task;