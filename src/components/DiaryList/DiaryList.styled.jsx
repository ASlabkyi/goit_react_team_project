import styled from "styled-components";

export const Box = styled.div`
  position: relative;
`


export const List = styled.ul`
  //background-color: red;
  width: 500px;
  height: 305px;
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  z-index: 2;

  ::-webkit-scrollbar {
    width: 6px;
    height: 40px;
  }
  ::-webkit-scrollbar-track {
    background: #f0f1f3;
    box-shadow: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #264061;
    box-shadow: none;
  }
`;
export const BlurBlock = styled.div`
  height: 30px;
  width: 500px;
  /* filter: blur(4px); */
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  /* background-color: white;
  opacity: 0.3; */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    #ffffff 42.19%
  );
`;
