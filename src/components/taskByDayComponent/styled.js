import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

export const DaysContainerTaskContainer = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  border-bottom: 1px solid #cccccc;
`;

export const Completed = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: green;
    cursor: pointer;
  }
`;

export const Task = styled.div`
  width: 340px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-right: 1px solid #c9c9c9;
  border-left: 1px solid #c9c9c9;
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Delete = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: red;
    cursor: pointer;
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  color: black;
  width: 20px;
  height: 20px;
  :hover {
    color: white;
  }
`;

export const StyledCheckIcon = styled(CheckIcon)`
  color: black;
  width: 20px;
  height: 20px;
  :hover {
    color: white;
  }
`;
