import styled from "styled-components";

export const DaysContainer = styled.div`
  width: 400px;
  max-height: 300px;
  background-color: #e0e0e0;
  margin: 20px;
  @media (max-width: 500px) {
    width: 90%;
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const DaysContainerHeader = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  background-color: #c9c9c9;
`;

export const DaysContainerTitle = styled.h2`
  margin: 0;
  padding: 0;
`;
