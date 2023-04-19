import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Input, LoginBtn, RegisterBtn, Title } from './LoginForm.styled';
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
    <Box
      component="div"
      sx={{
        display: 'flex',

        flexDirection: { xs: 'column' },
        paddingTop: {
          sm: '40px',
          md: '160px ',
          lg: '160px ',
        },
        paddingLeft: {
          sm: '20px',
          md: '32px ',
          lg: '16px ',
        },
        paddingBottom: {
          sm: '100px',
          md: '419px ',
          lg: '179px ',
        },
        paddingRight: { sm: '20px' },
      }}
    >
      <Title>LOG IN</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form autoComplete="off">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
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
                  type="email"
                  name="email"
                  label="Email"
                  variant="standard"
                  required
                  placeholder="Example@mail.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
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
                  variant="standard"
                  required
                  placeholder="Min 8 characters"
                  value={values.password}
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
                <LoginBtn
                  type="submit"
                  variant="contained"
                  sx={{
                    marginBottom: { xs: '20px', md: '0px' },
                    marginRight: { md: '32px' },
                    padding: { xs: '13px 50px', lg: '13px 37px' },
                  }}
                >
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
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default LoginForm;
