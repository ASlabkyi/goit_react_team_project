import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
