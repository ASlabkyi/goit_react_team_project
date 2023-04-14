import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BurgerMenu = styled.button`
  display: block;
  border: none;
  width: 24px;
  height: 24px;
  margin-right: 15px;
  background-color: inherit;
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
  padding-left: 20px;
  padding-top: 8px;
  @media (min-width: 768px) {
    display: none;
  }
  /* @media screen and (min-width: 1280px) {
    display: none;
  } */
`;
export const Exit = styled.button`
  border: none;
  font-weight: 700;
  font-size: 14px;
  color: var(--gray-text-color);
  margin-right: 20px;
  line-height: 17px;
  letter-spacing: 4%;
  margin-bottom: 5px;
  background-color: inherit;
  padding: 10px 15px 7px 16px;
  border-left: 1px solid var(--gray-text-color);
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
export const Nic = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.2;
  font-weight: 700;
  font-size: 14px;
  color: var(--black-color);
  letter-spacing: 0.06em;
  margin-right: 20px;
  line-height: 17px;
  letter-spacing: 4%;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
export const UserWraper = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
  }
`;

export const UserMenuWrap = styled.div`
  display: flex;
  width: 80vw;
  width: 95vw;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    width: 85vw;
  }
  @media screen and (min-width: 1280px) {
    width: 80vw;
    align-items: baseline;
  }
`;
export const UserDesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const MobileLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mobilelist = styled.div`
  display: flex;
  background-color: var(--violet-bg-color);
`;
