import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Box } from '@mui/material';
import { Formik } from 'formik';
import {
  FormRegister,
  Input,
  LoginBtn,
  RegisterBtn,
  Title,
} from './RegistrationForm.styled.js';
import { register } from 'redux/auth/operations.js';

const schema = yup.object().shape({
  name: yup
    .string()
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles d'Artagnan"
    ),
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

const Register = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmitRegister =  (values, { resetForm }) => {
    const newUser = {
      username: values.name,
      email: values.email,
      password: values.password,
    };

   dispatch(register(newUser));
    

    resetForm();
  };

  return (
    <>
      <Title>REGISTER</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitRegister}
        validationSchema={schema}
      >
        {({ values, handleChange, handleBlur }) => (
          <FormRegister>
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
                type="name"
                name="name"
                label="Name"
                variant="standard"
                value={values.name}
                required
                onBlur={handleBlur}
                onChange={handleChange}
              ></Input>
              <Input
                type="email"
                name="email"
                label="Email"
                variant="standard"
                value={values.email}
                required
                onBlur={handleBlur}
                onChange={handleChange}
              ></Input>
              <Input
                type="password"
                name="password"
                label="Password"
                variant="standard"
                value={values.password}
                required
                autoComplete="off"
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
              <RegisterBtn type="submit" variant="contained">
                Register
              </RegisterBtn>
              <LoginBtn
                type="submit"
                variant="outlined"
                href="/goit_react_team_project/login"
              >
                Log in
              </LoginBtn>
            </Box>
          </FormRegister>
        )}
      </Formik>
    </>
  );
};
export default Register;
