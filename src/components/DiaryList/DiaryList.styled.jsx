import styled from "styled-components";

export const List = styled.ul`
  //background-color: red;
  width: 500px;
  height: 200px;
  position: absolute;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
    height: 40px;
  }
  ::-webkit-scrollbar-track {
    background: #f0f1f3;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #264061;
  }
`;
