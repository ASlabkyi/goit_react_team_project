import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BurgerMenu = styled.button`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Back = styled(Link)`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const NavliNk = styled(NavLink)`
  display: none;
  font-weight: 700;
  font-size: 14px;
  color: var(--gray-text-color);
  margin-right: 20px;
  line-height: 17px;
  letter-spacing: 4%;
  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const NicMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eff1f3;
  flex-direction: row;
  border-top: 1px solid var(--gray-text-color);
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Exit = styled.button`
  border: none;
  font-weight: 700;
  font-size: 14px;
  color: var(--gray-text-color);
  margin-right: 20px;
  line-height: 17px;
  letter-spacing: 4%;
  background-color: #eff1f3;
  padding: 15px 20px 8px 16px;
  border-left: 1px solid var(--gray-text-color);
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
export const Nic = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--black-color);
  margin-right: 20px;
  line-height: 17px;
  letter-spacing: 4%;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
export const UserWraper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserDesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
