export function getTasks(state = [], action) {
    const tasks = [...state];
    
    switch(action.type) {
        case 'GET_TASKS':
            return action.items;

        case 'POST_TASK':
            const addedTasks = tasks.concat({ description: action.task });
            localStorage.setItem('tasks', JSON.stringify(addedTasks));
            return addedTasks;

        case 'PUT_TASK':
            tasks.splice(action.index, 1, { description: action.task });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return tasks;

        case 'DELETE_TASK':
            tasks.splice(action.index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            return tasks;

        default:
            return state;
    }
}