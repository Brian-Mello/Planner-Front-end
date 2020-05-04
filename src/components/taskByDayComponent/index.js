import React from 'react';
import { DaysContainerTaskContainer, Completed, Task, Delete, StyledDeleteIcon, StyledCheckIcon } from './styled';

export function TaskByDayComponent (props) {
    return(
        <DaysContainerTaskContainer>
            <Completed onClick={props.onComplete}><StyledCheckIcon/></Completed>
            <Task>{props.text}</Task>
            <Delete onClick={props.onDelete}><StyledDeleteIcon/></Delete>
        </DaysContainerTaskContainer>
    )
}

export default TaskByDayComponent;