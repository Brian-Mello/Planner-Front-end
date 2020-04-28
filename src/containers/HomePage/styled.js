import styled from 'styled-components';

export const StyledBody = styled.body`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ddedff;
`

export const StyledMain = styled.main `
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    background-color: #dbdbd3;
    display: flex;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 600px){
        flex-direction: column;
    }
`