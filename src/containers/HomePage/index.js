import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { StyledBody, StyledMain, TasksContainer, TitleTasksContainer, StyledH2, DaysTaskContainer, DaysContainer, DaysContainerHeader, DaysContainerTitle, TasksDiv } from './styled';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ScrollToTop from '../../components/ScrollToTop';
import FormContainer from '../formContainer';
import { checkUser, getTasks, createTask, deleteTask, changeTaskCompletedState, setTaskId } from '../../actions';
// import Loader from '../../components/loader'
// import DayComponent from '../../components/dayComponent';
import TaskByDayComponent from '../../components/taskByDayComponent';

export class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            completed: false
        }
    }

    componentDidMount(){
        const accessToken = window.localStorage.getItem("accessToken")

        if(!accessToken){
            const id = v4()
            this.props.checkUser(id)
        } else {
            this.props.getTasks()
        }
    }

    handleDeleteTask(taskId){
        this.props.deleteTask(taskId)
    }

    handleCompleteTask = (event, taskId, completed) => {
        event.preventDefault();
        console.log(completed)
        this.props.changeTaskCompletedState(completed === 1 ? "FALSE" : "TRUE", taskId)
    }

    render() {

        const { tasks } = this.props;
        
        
        const mondayTasksUncompletedFilter = this.props.tasks.filter(task => {
            return task.day === "Segunda" && task.completed === 0
        })

        const tuesdayTasksUncompletedFilter = tasks.filter(task => {
            return task.day === "Terça" && task.completed === 0
        })

        const wednesdayTasksUncompletedFilter = tasks.filter(task => {
            return task.day === "Quarta" && task.completed === 0
        })

        const thursdayTasksUncompletedFilter = tasks.filter(task => {
            return task.day === "Quinta" && task.completed === 0
        })

        const fridayTasksUncompletedFilter = tasks.filter(task => {
            return task.day === "Sexta" && task.completed === 0
        })

        const saturdayTasksUncompletedFilter = tasks.filter(task => {
            return task.day === "Sábado" && task.completed === 0
        })

        const sundayTasksUncompletedFilter = tasks.filter(task => {
            return task.day === "Domingo" && task.completed === 0
        })

        const mondayTasksCompletedFilter = this.props.tasks.filter(task => {
            return task.day === "Segunda" && task.completed === 1
        })

        const tuesdayTasksCompletedFilter = tasks.filter(task => {
            return task.day === "Terça" && task.completed === 1
        })

        const wednesdayTasksCompletedFilter = tasks.filter(task => {
            return task.day === "Quarta" && task.completed === 1
        })

        const thursdayTasksCompletedFilter = tasks.filter(task => {
            return task.day === "Quinta" && task.completed === 1
        })

        const fridayTasksCompletedFilter = tasks.filter(task => {
            return task.day === "Sexta" && task.completed === 1
        })

        const saturdayTasksCompletedFilter = tasks.filter(task => {
            return task.day === "Sábado" && task.completed === 1
        })

        const sundayTasksCompletedFilter = tasks.filter(task => {
            return task.day === "Domingo" && task.completed === 1
        })

        let mondayTasks;

        if(mondayTasksUncompletedFilter){
            mondayTasks = (mondayTasksUncompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                    onComplete={(event) => {this.handleCompleteTask(event, task.id, task.completed)}}
                />
            ))
        } 

        let tuesdayTasks;

        if(tuesdayTasksUncompletedFilter){
            tuesdayTasks = (tuesdayTasksUncompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let wednesdayTasks;

        if(wednesdayTasksUncompletedFilter){
            wednesdayTasks = (wednesdayTasksUncompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let thursdayTasks;

        if(thursdayTasksUncompletedFilter){
            thursdayTasks = (thursdayTasksUncompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let fridayTasks;

        if(fridayTasksUncompletedFilter){
            fridayTasks = (fridayTasksUncompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let saturdayTasks;

        if(saturdayTasksUncompletedFilter){
            saturdayTasks = (saturdayTasksUncompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let sundayTasks;

        if(sundayTasksUncompletedFilter){
            sundayTasks = (sundayTasksUncompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 
            
        let mondayCompletedTasks;

        if(mondayTasksCompletedFilter){
            mondayCompletedTasks = (mondayTasksCompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                    onComplete={(event) => {(this.handleCompleteTask(event, task.id, task.completed))}}
                />
            ))
        } 

        let tuesdayCompletedTasks;

        if(tuesdayTasksCompletedFilter){
            tuesdayCompletedTasks = (tuesdayTasksCompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let wednesdayCompletedTasks;

        if(wednesdayTasksCompletedFilter){
            wednesdayCompletedTasks = (wednesdayTasksCompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let thursdayCompletedTasks;

        if(thursdayTasksCompletedFilter){
            thursdayCompletedTasks = (thursdayTasksCompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let fridayCompletedTasks;

        if(fridayTasksCompletedFilter){
            fridayCompletedTasks = (fridayTasksCompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let saturdayCompletedTasks;

        if(saturdayTasksCompletedFilter){
            saturdayCompletedTasks = (saturdayTasksCompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        let sundayCompletedTasks;

        if(sundayTasksCompletedFilter){
            sundayCompletedTasks = (sundayTasksCompletedFilter.map((task) =>
                <TaskByDayComponent
                    text={task.text}
                    onDelete={() => this.handleDeleteTask(task.id)}
                />
            ))
        } 

        return(
            <StyledBody>
                <Header/>
                <StyledMain>
                    <FormContainer/>
                    <TasksContainer>
                        <TitleTasksContainer>
                            <StyledH2>Tarefas</StyledH2>
                        </TitleTasksContainer>
                        <DaysTaskContainer>
                            <DaysContainer>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Segunda</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {mondayTasks}
                                </TasksDiv>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {mondayCompletedTasks}
                                </TasksDiv>
                            </DaysContainer>
                            <DaysContainer>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Terça</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {tuesdayTasks}
                                </TasksDiv>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {tuesdayCompletedTasks}
                                </TasksDiv>
                            </DaysContainer>
                            <DaysContainer>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Quarta</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {wednesdayTasks}
                                </TasksDiv>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {wednesdayCompletedTasks}
                                </TasksDiv>
                            </DaysContainer>
                            <DaysContainer>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Quinta</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {thursdayTasks}
                                </TasksDiv>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {thursdayCompletedTasks}
                                </TasksDiv>
                            </DaysContainer>
                            <DaysContainer>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Sexta</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {fridayTasks}
                                </TasksDiv>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {fridayCompletedTasks}
                                </TasksDiv>
                            </DaysContainer>
                            <DaysContainer>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Sábado</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {saturdayTasks}
                                </TasksDiv>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {saturdayCompletedTasks}
                                </TasksDiv>
                            </DaysContainer>
                            <DaysContainer>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Domingo</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {sundayTasks}
                                </TasksDiv>
                                <TasksDiv>
                                    <DaysContainerHeader>
                                        <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
                                    </DaysContainerHeader>
                                    {sundayCompletedTasks}
                                </TasksDiv>
                            </DaysContainer>
                        </DaysTaskContainer>
                    </TasksContainer>
                </StyledMain>
                <Footer/>
                <ScrollToTop/>
            </StyledBody>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks.allTasks,
    taskId: state.tasks.selectedTaskId
})
  
const mapDispatchToProps = dispatch =>({
    checkUser: (id) => dispatch(checkUser(id)),
    getTasks: () => dispatch(getTasks()),
    createTask: (text, day) => dispatch(createTask(text, day)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    changeTaskCompletedState: (completed, taskId) => dispatch(changeTaskCompletedState(completed, taskId)),
    setTaskId: (taskId) => dispatch(setTaskId(taskId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);