import styled from 'styled-components';

export const StyledBody = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ddedff;
    display: flex;
    flex-direction: column;
`

export const StyledMain = styled.main `
    width: 100%;
    min-width: 300px;
    min-height: 100%;
    background-color: #dbdbd3;
    display: flex;
    font-family: 'Manrope', sans-serif;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const TasksContainer = styled.div `
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 500px){
        display: flex;
        justify-content: center;
    }
` 

export const TitleTasksContainer = styled.div `
    width: 100%;
    height: 30px;
    text-align: center;
    margin-bottom: 20px;
`

export const StyledH2 = styled.h2 `
    margin: 0;
    padding: 0;
`

export const DaysTaskContainer = styled.div `
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const DaysContainer = styled.div `
    width: 400px;
    min-height: 200px;
    background-color: #b2b2b2; 
    margin: 20px;
    @media (max-width: 500px){
        width: 90%;
        margin: 0;
        margin-bottom: 20px;
    }
`

export const TasksDiv = styled.div`
    width: 100%;
    height: 50%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
`

export const DaysContainerHeader = styled.div `
    width: 100%;
    height: 30px;
    text-align: center;
    background-color: #a5a5a5;
`

export const DaysContainerTitle = styled.h2 `
    margin: 0;
    padding: 0;
`