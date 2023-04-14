import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navlink = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  color: var(--gray-text-color);
  margin-right: 20px;
  line-height: 17px;
  letter-spacing: 4%;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    padding-left: 20px;
    border-left: 1px solid var(--gray-text-color);
  }
`;
