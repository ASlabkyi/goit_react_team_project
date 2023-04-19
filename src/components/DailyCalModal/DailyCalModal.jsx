import * as React from 'react';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import {
  Modal,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

export const DailyCalModal = ({
  open,
  handleClose,
  dailyRate,
  notAllowedProducts,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '45%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '100vw', md: '672px' },
    height: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: 0,
  };
  const iconStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '20px',
    height: '20px',
  };

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const notAllowedProductsArray = Array.from(notAllowedProducts);

  const generate = () => {
    return notAllowedProductsArray.slice(0, 5).map((product, index) => (
      <ListItem
        key={index}
        sx={{
          marginBottom: '0',
          marginTop: '0',
          paddingBottom: '0',
          paddingTop: '0',
        }}
      >
        <ListItemText
          primary={product}
          sx={{
            color: '#9B9FAA',
            fontFamily: 'Verdana',
            fontWeight: '400',
            fontSize: '14px',
            textAlign: 'start',
          }}
        />
      </ListItem>
    ));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} textAlign="center">
        <CloseIcon onClick={handleClose} style={iconStyle} />
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontFamily: 'Verdana',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '1,6',
            marginTop: '64px',
            marginLeft: '82px',
            marginRight: '82px',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Your recommended daily calorie intake is
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mt: 4, mb: 2 }}
          fontFamily="Verdana"
          color="#264061"
          fontStyle="normal"
          fontWeight="900"
          fontSize="35px"
          lineHeight="140%"
          marginBottom="44px"
          textAlign="center"
        >
          {dailyRate}
          <span>kcal</span>
        </Typography>
        <Box textAlign="start">
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            fontFamily="Verdana"
            fontStyle="normal"
            fontWeight="700"
            fontSize="18px"
            lineHeight="17px"
            marginBottom="20px"
            marginRight="40px"
            textAlign="center"
          >
            Foods you should not eat
          </Typography>
          <Demo>
            <List dense={dense} sx={{ width: '300px', margin: '0 auto' }}>
              {generate()}
            </List>
          </Demo>
        </Box>
        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            if (isLoggedIn) {
              handleClose();
            } else {
              window.location.href = '/goit_react_team_project/register';
            }
          }}
          sx={{
            width: '210px',
            height: '43px',
            marginBottom: { xs: '41px', md: '48px', lg: '82px' },
            marginTop: '40px',
            textAlign: 'center',
            justifyContent: 'center',
            background: '#FC842D',
            boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
            borderRadius: '30px',
            textTransform: 'none',
            fontFamily: 'Verdana',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: {
              xs: '0.04em',
              sm: 'unset',
            },
            '&:hover': {
              background: '#FC842D',
            },
          }}
        >
          Start losing weight
        </Button>
      </Box>
    </Modal>
  );
};
