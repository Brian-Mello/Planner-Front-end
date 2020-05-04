import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const FormDiv = styled.div `
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Manrope', sans-serif;
` 

export const Form = styled.form `
    width: 600px;
    min-width: 375px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 505px){
        width: 100%;
        flex-direction: column;
    }
` 

export const StyledTextField = styled(TextField)`
    color: black;
`

export const StyledButtonForms = styled(Button) `
    cursor: pointer;
    color: black;
    width: auto;
    font-family: 'Manrope', sans-serif;
    :hover {
        border: 1px solid white;
        background-color: #c4c4be;
    }
`