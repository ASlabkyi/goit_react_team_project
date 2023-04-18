import * as React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';


export const DailyCalModal = ({ open, handleClose, dailyRate, notAllowedProducts }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '672px',
        height: 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

      const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
      }));
      const [dense, setDense] = React.useState(false);
      const [secondary, setSecondary] = React.useState(false);
      const notAllowedProductsArray = Array.from(notAllowedProducts);

      const generate = () => {
        return notAllowedProductsArray.slice(0, 5).map((product, index) => (
          <ListItem key={index}>
            <ListItemText primary={product} />
          </ListItem>
        ));
      };

    return(
        <Modal
            open={open}
            onClose={handleClose}
            >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily='Verdana' fontStyle='normal' fontWeight='700' fontSize='26px' lineHeight='140%'>
            Your recommended daily calorie intake is
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2" fontFamily='Verdana' fontStyle='normal' fontWeight='700' fontSize='26px' lineHeight='140%'>
            {dailyRate}
            </Typography>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Foods you should not eat
              </Typography>
              <Demo>
                <List dense={dense}>
                  {generate(
                  )}
                </List>
              </Demo>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: '210px',
                height: '43px',
                marginTop: '60px',
                marginBottom: { xs: '41px', md: '48px', lg: '0px' },
                marginLeft: {
                  md: '32px',
                  lg: '339px',
                },
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
    )
}

            