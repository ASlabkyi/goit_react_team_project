import { useDispatch } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
      <h2>LOG IN</h2>
      <div>
        <form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gridGap: '40px',
              mt: '55px',
            }}
          >
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="standard"
              required
            ></TextField>
            <TextField
              type="password"
              name="email"
              label="Password"
              variant="standard"
              required
              autoComplete="off"
            ></TextField>
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
            <Button type="submit" variant="contained" color="primary">
              Log in
            </Button>
            <Button
              type="submit"
              variant="outlined"
              href="/goit_react_team_project/register"
            >
              Register
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};
export default Login;
