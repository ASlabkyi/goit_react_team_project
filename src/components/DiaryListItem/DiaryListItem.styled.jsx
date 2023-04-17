import styled from 'styled-components';

export const ListItem = styled.li`
  //background-color: green;
  color: blue;
  display: flex;
  width: 450px;
  height: 30px;
  margin: 20px 50px 20px 0px;
`;

export const ProductName = styled.p`
  border-bottom: solid 1px #e0e0e0;
  margin-right: 50px;
  width: 105px;
  color: #212121;
`;

export const Grams = styled.p`
  display: flex;
  border-bottom: solid 1px red;
  border-color: #e0e0e0;
  color: #212121;
  width: 105px;
  flex-direction: row-reverse;
  margin-right: 30px;
`;

export const DeleteButton = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0;
  border: 0.5px;
  background-color: white;
  /* position: relative; */
  /* margin-top: 7.5px;
margin-bottom: 7.5px; */
  /* :before, :after{
  content: "";
  position: absolute;
  background-color: red;
}
::before {
  left: 50%;
  right: 50%;
  margin-left: 15%;
  height: 100%;
} */
`;
