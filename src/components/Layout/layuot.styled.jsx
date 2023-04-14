import styled from 'styled-components';

const baseTheme = {
  media: {
    tablet: '(min-width:768px)',
    desktop: '(min-width:1280px)',
  },
};

export const Header = styled.header`
  display: flex;
  border-bottom: 1px solid var(--gray-text-color);
  width: 100vw;
  padding: 20px 20px 0px 0px;
  @media (min-width: 768px) {
    padding: 20px 32px 5px 32px;
  }
  @media (min-width: 1280px) {
    padding: 80px 16px 16px 16px;
    border: none;
  }
`;
