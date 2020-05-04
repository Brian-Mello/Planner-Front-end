const initialState = {
    allTasks: [],
    selectedTaskId: ""
}

const tasks = ( state = initialState, action) => {
    switch(action.type) {
        case "SET_TASKS":
            const tasks = action.payload.tasks
            return { ...state, allTasks: tasks}
        
        case "SET_TASK_ID": 
            const taskId = action.payload.taskId
            return { ...state, selectedTaskId: taskId}
            
        default:
            return state
    }
}  

export default tasks;