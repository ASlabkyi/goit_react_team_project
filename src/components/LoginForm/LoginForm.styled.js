import { Form } from 'formik';
import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const Title = styled.h2`
  color: rgb(252, 132, 45);
  font-size: 14px;
  margin-left: 32px;
`;

export const FormLogIn = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    align-items: start;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 16px;
  }
`;

export const Input = styled(TextField)({
  '& label.Mui-focused': {
    color: 'orange',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'orange',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
    },
  },
});

export const LoginBtn = styled(Button)({
  textTransform: 'none',
  padding: '13px 50px',
  boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
  borderRadius: '30px',
  height: '44px',
  fontSize: '14px',
  width: '182px',
  backgroundColor: '#fc842d',
  ' &:hover': {
    backgroundColor: '#ef6705',
  },
  ' &:focus': {
    backgroundColor: '#ef6705',
  },
});

export const RegisterBtn = styled(Button)({
  textTransform: 'none',
  padding: '13px 50px',
  borderRadius: '30px',
  width: '182px',
  height: '44px',
  fontSize: '14px',
  backgroundColor: 'transparant',
  color: '#FC842D',
  border: '2px solid #FC842D',
  ' &:hover': {
    backgroundColor: '#ef6705',
    border: 'none',
    color: '#fff',
  },
  ' &:focus': {
    backgroundColor: '#ef6705',
    border: 'none',
    color: '#fff',
  },
});
