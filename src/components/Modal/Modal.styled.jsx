import styled from 'styled-components';
import { mediaSizes, transition, ishidden } from 'styles/mixins';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.12);
  opacity: 1;
  ${transition('visible')};
  
  &.is-hidden {
    ${ishidden};
    
    & .inner {
      transform: scale(0.7);
      ${transition('transform')};
    }
  }
  
  & .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);
    
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 672px;
      height: auto;
      max-width: calc(100% - 24px * 2);
    }
  }
  
  & .inner {
    height: 100%;
    transform: scale(1);
    ${transition('transform')};
    overflow: hidden;
    padding: 80px 40px;
    background-color: #ffffff;
    overflow: hidden;
    position: relative;
    
    @media screen and (min-width: ${mediaSizes.tablet}) {
      box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
      padding: 64px 82px 82px 82px;
    }
  }
  
  & .close {
    background-color: #eff1f3;
    width: 100%;
    height: 40px;
    border: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    
    @media screen and (min-width: ${mediaSizes.tablet}) {
      background-color: transparent;
      border: none;
      width: 20px;
      height: 20px;
      right: 24px;
      top: 24px;
      ${transition('transform')}
      
      &:hover {
        transform: scale(1.2);
      }
      
      &__icon {
        fill: #000000;
        width: 20px;
        height: 20px;
      }
    }
  }
  
  & .return__icon {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 25px;
    height: 20px;
    cursor: pointer;
    ${transition('transform')}
    
    &:hover {
      transform: scale(1.2);
    }
  }
  
  
  &.modal-opened {
    overflow: hidden;
  }
  
  & .inner {
    outline: none;
  }
  
  &[aria-modal="true"] {
    overflow: auto;
  }
`;