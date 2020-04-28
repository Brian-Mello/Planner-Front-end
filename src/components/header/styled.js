import styled from 'styled-components';

// containers

export const StyledHeader = styled.header`
    width: 100%;
    min-width: 300px;
    height: 100px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: #abbbcc;
    color: white;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 800px) {
        height: 150px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`