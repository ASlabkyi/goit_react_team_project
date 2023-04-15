import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  FormLogIn,
  Input,
  LoginBtn,
  RegisterBtn,
  Title,
} from './LoginForm.styled';
import { login } from 'redux/auth/operations';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid type of email')
    .required('Email is required'),
  password: yup
    .string()
    .min(
      8,
      'Invalid type of password ( password must be at least of 8 characters)'
    )
    .required('Password is required'),
});

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <>
      <Title>LOG IN</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, handleChange, handleBlur }) => (
          <FormLogIn autoComplete="off">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gridGap: '40px',
                mt: '55px',
              }}
            >
              <Input
                type="email"
                name="email"
                label="Email"
                variant="standard"
                required
                placeholder="example@mail.com"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              ></Input>
              <Input
                type="password"
                name="password"
                label="Password"
                variant="standard"
                required
                autoComplete="off"
                placeholder="Min 8 characters"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              ></Input>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                alignItems: 'center',
                gridGap: ['20px', '32px'],
                mt: '60px',
              }}
            >
              <LoginBtn type="submit" variant="contained">
                Log in
              </LoginBtn>
              <RegisterBtn
                type="submit"
                variant="outlined"
                href="/goit_react_team_project/register"
              >
                Register
              </RegisterBtn>
            </Box>
          </FormLogIn>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;
