import { useDispatch } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';

const Register = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmitRegister = async (values, { resetForm }) => {
    // await dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <h2>REGISTER</h2>
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
              type="name"
              name="name"
              label="Name"
              variant="standard"
              required
            ></TextField>
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
            <Button type="submit" variant="contained">
               Register
            </Button>
            <Button
              type="submit"
              variant="outlined"
              href="/goit_react_team_project/login"
            >
              Log in
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};
export default Register;
