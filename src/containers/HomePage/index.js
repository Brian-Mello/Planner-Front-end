import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import {StyledBody,StyledMain,TasksContainer,TitleTasksContainer,StyledH2,DaysTaskContainer} from "./styled";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ScrollToTop from "../../components/ScrollToTop";
import FormContainer from "../formContainer";
import { checkUser,getTasks,createTask,deleteTask,changeTaskCompletedState} from "../../actions";
import DayComponent from "../../components/dayComponent";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
    };
  }

  componentDidMount() {
    const accessToken = window.localStorage.getItem("accessToken");
    
    if (!accessToken) {
      const id = v4();
      this.props.checkUser(id);
    } else {
      this.props.getTasks();
    }
  }

  handleDeleteTask = (text, taskId) => {
    this.props.deleteTask(text, taskId);
  }

  handleCompleteTask = (event, taskId, completed) => {
    event.preventDefault();

    this.props.changeTaskCompletedState(
      completed === 1 ? "FALSE" : "TRUE",
      taskId
    );
  };

  filterTasks = (tasks, weekday, completed) => {
    return tasks.filter((task) => {
      return task.day === weekday && task.completed === completed;
    });
  };

  render() {
    const { tasks } = this.props;
    const weekdays = [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ];

    return (
      <StyledBody>
        <Header />
        <StyledMain>
          <FormContainer />
          <TasksContainer>
            <TitleTasksContainer>
              <StyledH2>Tarefas</StyledH2>
            </TitleTasksContainer>
            <DaysTaskContainer>
              {weekdays.map((weekday) => {
                return (
                  <DayComponent
                    key={weekday}
                    day={weekday}
                    uncompletedTasks={this.filterTasks(tasks, weekday, 0)}
                    completedTasks={this.filterTasks(tasks, weekday, 1)}
                    handleDeleteTask={this.handleDeleteTask}
                    handleCompleteTask={this.handleCompleteTask}
                  />
                );
              })}
            </DaysTaskContainer>
          </TasksContainer>
        </StyledMain>
        <Footer />
        <ScrollToTop />
      </StyledBody>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.allTasks,
  taskId: state.tasks.selectedTaskId,
});

const mapDispatchToProps = (dispatch) => ({
  checkUser: (id) => dispatch(checkUser(id)),
  getTasks: () => dispatch(getTasks()),
  createTask: (text, day) => dispatch(createTask(text, day)),
  deleteTask: (text, taskId) => dispatch(deleteTask(text, taskId)),
  changeTaskCompletedState: (completed, taskId) => dispatch(changeTaskCompletedState(completed, taskId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
