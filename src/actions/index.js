// Função de cadastro
import axios from 'axios';

const baseUrl = "https://rsxqac02u2.execute-api.us-east-1.amazonaws.com/Planner"

// User
export const checkUser = (id) => async (dispatch) => {

    const user = {
        id
    }

    try{

        const response = await axios.post(`${baseUrl}/checkUser`, user)

        window.localStorage.setItem("accessToken", response.data.accessToken)

        window.alert(`Usuário ${id} criado com sucesso!`)

    } catch(err){
        window.alert("Erro na authenticaçao do usuário!")
    }
}

// Tasks

// ação que guarda o estado das tarefas 
export const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks
    }
})

// ação que pega as tarefas da api
export const getTasks = () => async (dispatch) => {

    const accessToken = window.localStorage.getItem("accessToken")

    try {
        const response = await axios.get(`${baseUrl}/tasks`, {
            headers: {
                Authorization: accessToken
            }
        })
        dispatch(setTasks(response.data.tasks))

    } catch(err){
        window.alert("Erro ao renderizar as tarefas!")
    }
} 

export const createTask = (text, day) => async(dispatch) => {

    const task = {
        text,
        day
    }

    const accessToken = window.localStorage.getItem("accessToken")

    try{
        await axios.post(`${baseUrl}/createTask`, task, {
            headers: {
                Authorization: accessToken
            }
        })
        
        window.alert(`Tarefa '${text}' criada para ${day}!`)
        dispatch(getTasks())
    }catch(err){
        window.alert("Erro ao criar a tarefa!")
    }
}

export const setTaskId = (taskId) => ({
    type: "SET_TASK_ID",
    payload:{
        taskId
    }
})

export const deleteTask = (text, taskId) => async(dispatch) => {

    const accessToken = window.localStorage.getItem("accessToken")

    try{
        if(window.confirm("Você deseja deletar essa tarefa?")){

            await axios.delete(`${baseUrl}/tasks/deleteTask/${taskId}`, {
                headers: {
                    Authorization: accessToken
                }
            })
            window.alert(`Tarefa '${text}' deletada com successo!`)
            dispatch(getTasks())
        }
            
    } catch(err){
        window.alert("Erro ao deletar a tarefa!")
    }
}

export const changeTaskCompletedState = (completed, taskId) => async(dispatch) => {
    const completedTasks = {
        completed
    }

    const accessToken = window.localStorage.getItem("accessToken")
    try{
        await axios.post(`${baseUrl}/tasks/changeTaskCompletedState/${taskId}`, completedTasks, {
            headers: {
                Authorization: accessToken
            }
        })

        dispatch(getTasks())
    } catch(err){
        console.log(err.message)
        window.alert("Erro ao completar a tarefa!")
    }
}
