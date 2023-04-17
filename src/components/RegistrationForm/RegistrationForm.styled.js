import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const Title = styled.h2`
  // font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-align: center;
  color: var(--orange-color);
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;

export const Input = styled(TextField)({
  '& label.Mui-focused': {
    color: 'var(--orange-color)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--orange-color)',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'var(--orange-color)',
    },
  },
});

export const RegisterBtn = styled(Button)({
  textTransform: 'none',
  boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
  borderRadius: '30px',
  width: '182px',
  height: '44px',
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '1.75',
  backgroundColor: 'var(--orange-color)',
  ' &:hover': {
    backgroundColor: '#ef6705',
  },
  ' &:focus': {
    backgroundColor: '#ef6705',
  },
});

export const LoginBtn = styled(Button)({
  textTransform: 'none',
  borderRadius: '30px',
  width: '182px',
  height: '44px',
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '1.75',
  backgroundColor: 'transparant',
  color: '#FC842D',
  border: '2px solid var(--orange-color)',
  ' &:hover': {
    backgroundColor: '#ef6705',
    border: 'none',
    color: 'var(--white-color)',
  },
  ' &:focus': {
    backgroundColor: '#ef6705',
    border: 'none',
    color: 'var(--white-color)',
  },
});
