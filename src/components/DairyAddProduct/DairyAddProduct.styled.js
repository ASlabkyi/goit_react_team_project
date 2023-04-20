import { Fab, TextField, Button } from '@mui/material';
import styled from 'styled-components';

export const FabStyled = styled(Fab)`
  &.MuiFab-root {
    background-color: var(--orange-color);
    color: var(--white-color);
    margin-left: 30px;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      margin-top: 30px;
      width: 48px;
      height: 48px;
    }
    &:hover {
      background-color: #fc2d2d;
    }
    &:disabled {
      background-color: grey;
      box-shadow: none;
    }
  }
`;

export const FieldStyled = styled(TextField)`
  &.MuiTextField-root {
    margin: 0 24px;
    width: 240px;
    background-color: transparent;
    @media screen and (max-width: 767px) {
      width: 280px;
      margin: 0;
      margin-top: 61px;
    }
    .MuiInputBase-root {
      background-color: white;
      ::before {
        border-color: #e0e0e0;
      }
    }
  }
`;
export const FormStyled = styled.form`
  align-items: center;
  display: flex;
  position: relative;
  &.afterInvisible {
    ::after {
      display: none;
    }
  }
  ::after {
    left: 0;
    bottom: -345px;
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    pointer-events: none;
    z-index: 1;
    height: 50px;
    background: linear-gradient(
      180deg,
      rgb(255 255 255 / 23%) 0%,
      var(--white-color) 42.19%
    );
    @media screen and (max-width: 767px) {
      bottom: 53px;
    }
  }
  div.wrapper {
    display: block;
    @media screen and (max-width: 767px) {
      display: none;
      min-height: 450px;
    }
  }
  .MuiInputLabel-root {
    color: var(--gray-text-color);
    font-weight: 700;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
`;

export const ButtonStyled = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid var(--orange-color)',
  borderRadius: 30,
  width: 182,
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: 1.2,
  textTransform: 'none',
  paddingTop: '13px',
  paddingBottom: '13px',
  cursor: 'pointer',

  '&:hover, &:focus': {
    backgroundColor: '#f28f1d',
  },
  '&:disabled': {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
});
