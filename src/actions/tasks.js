export function getTasks(items) {
    return {
        type: 'GET_TASKS',
        items
    };
}

export function postTask(task) {
    return {
        type: 'POST_TASK',
        task
    };
}

export function putTask(task, index) {
    return {
        type: 'PUT_TASK',
        task,
        index
    };
}

export function deleteTask(index) {
    return {
        type: 'DELETE_TASK',
        index
    };
}



