import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
`;

export const List = styled.ul`
  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border: 6px solid white; // Изменить цвет при смене темы
    background-color: var(--gray-text-cl);
    border-radius: 20px;
    height: 40px;
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
