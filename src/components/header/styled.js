import styled from 'styled-components';

// containers

export const StyledHeader = styled.header`
    width: 100%;
    min-width: 300px;
    height: 100px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #abbbcc;
    color: white;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`