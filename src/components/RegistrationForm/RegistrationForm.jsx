import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import {
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

  const handleSubmitRegister = (values, { resetForm }) => {
    const newUser = {
      username: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(newUser);
    dispatch(register(newUser));

    resetForm();
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        paddingTop: {
          sm: '40px',
          md: '160px',
          lg: '160px',
        },
        paddingLeft: {
          sm: '20px',
          md: '32px',
          lg: '16px',
        },
        paddingBottom: {
          sm: '100px',
          md: '32x',
          lg: '179px',
        },
        paddingRight: {
          sm: '20px',
        },
      }}
    >
      <Title
        sx={{
          marginLeft: { xs: 'auto', md: '0px' },
          marginRight: { xs: 'auto', md: '0px' },
        }}
        variant="h5"
      >
        REGISTER
      </Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitRegister}
        validationSchema={schema}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '40px',

                  marginLeft: { xs: 'auto', md: '0px' },
                  marginRight: { xs: 'auto', md: '0px' },
                  marginBottom: '60px',
                  maxWidth: { sm: '280px', md: '240px' },
                  width: '100%',
                }}
              >
                <Input
                  type="name"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  variant="standard"
                  value={values.name}
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.name && errors.name)}
                  helperText={touched.name && errors.name}
                  sx={{
                    label: {
                      color: 'var(--gray-text-color)',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                    },
                  }}
                ></Input>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Example@mail.com"
                  variant="standard"
                  value={values.email}
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{
                    label: {
                      color: 'var(--gray-text-color)',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                    },
                  }}
                ></Input>
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Min 8 characters"
                  variant="standard"
                  value={values.password}
                  required
                  autoComplete="off"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    label: {
                      color: 'var(--gray-text-color)',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                    },
                  }}
                ></Input>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  marginLeft: { xs: 'auto', md: '0px' },
                  marginRight: { xs: 'auto', md: '0px' },
                }}
              >
                <RegisterBtn
                  sx={{
                    marginBottom: { xs: '20px', md: '0px' },
                    marginRight: { md: '32px' },
                    padding: { xs: '13px 50px', lg: '13px 37px' },
                  }}
                  type="submit"
                  variant="contained"
                >
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
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default Register;
