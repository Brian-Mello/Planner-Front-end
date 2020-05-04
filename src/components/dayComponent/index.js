import React from 'react';
import { DaysContainer, DaysContainerHeader, DaysContainerTitle} from './styled';

export function DayComponent (props) {
    return(
        <DaysContainer>
            <DaysContainerHeader>
                <DaysContainerTitle>{props.day}</DaysContainerTitle>
            </DaysContainerHeader>
        </DaysContainer>
    )
}

export default DayComponent;