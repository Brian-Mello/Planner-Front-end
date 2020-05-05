import React from "react";
import {
  DaysContainer,
  DaysContainerHeader,
  DaysContainerTitle,
} from "./styled";
import { TasksDiv } from "../../containers/HomePage/styled";
import TaskByDayComponent from "../taskByDayComponent";

export function DayComponent(props) {
  const renderTasks = (tasks, weekday) => {
    return tasks.map((task) => (
      <TaskByDayComponent
        key={task.id}
        text={task.text}
        onDelete={() => props.handleDeleteTask(task.text, task.id)}
        onComplete={(event) => {
          props.handleCompleteTask(event, task.id, task.completed);
        }}
      />
    ));
  };

  return (
    <DaysContainer>
      <TasksDiv>
        <DaysContainerHeader>
          <DaysContainerTitle>{props.day}</DaysContainerTitle>
        </DaysContainerHeader>
        {renderTasks(props.uncompletedTasks)}
      </TasksDiv>
      <TasksDiv>
        <DaysContainerHeader>
          <DaysContainerTitle>Tarefas Completa</DaysContainerTitle>
        </DaysContainerHeader>
        {renderTasks(props.completedTasks)}
      </TasksDiv>
    </DaysContainer>
  );
}

export default DayComponent;
