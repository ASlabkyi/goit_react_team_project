import styled from 'styled-components';

export const DiaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
