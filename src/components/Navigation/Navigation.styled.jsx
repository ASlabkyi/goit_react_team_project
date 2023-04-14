import styled from 'styled-components';
import '../../index';

export const Logotype = styled.svg`
  width: 44px;
  height: 46px;
  margin-right: 32px;
  @media (min-width: 768px) {
    margin-right: 10px;
    width: 46px;
    height: 44px;
  }
  @media (min-width: 1280px) {
    width: 70px;
    height: 66px;
  }
`;
export const Slim = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-weight: 400;

    line-height: 1.2;
    font-size: 24px;

    color: #212121;
    letter-spacing: 0.06em;
    color: var(--orange-color);
  }
  @media (min-width: 1280px) {
  }
`;

export const Mom = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-weight: 400;

    line-height: 1.2;
    font-size: 24px;

    color: #fc842d;
    letter-spacing: 0.06em;
  }
  @media (min-width: 1280px) {
  }
`;

export const NavigWraper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 1280px) {
    justify-content: flex-start;
    align-items: flex-end;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 1280px) {
    margin-right: 10px;
    align-items: flex-end;
  }
`;
