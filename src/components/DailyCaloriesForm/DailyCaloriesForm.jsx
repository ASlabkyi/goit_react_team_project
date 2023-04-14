import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { FormControl } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';



const DailyCaloriesForm = () => {

  const isMobile = useMediaQuery('(max-width:767px)');

  const flexDirection = isMobile ? 'column' : 'row';
  
  return (
    <>
        <Box
          noValidate
          autoComplete="off">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: '100%', md: '608px', lg: '608px' },
            height: { xs: 'auto', md: '343px' },
            paddingLeft: '16px',
            paddingRight: '16px',
            marginBottom: '60px',
            marginTop: '293px',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
              <Typography 
                variant="h1" 
                textAlign='start'
                justifyContent="center"
                sx={{ 
                    fontFamily: 'Verdana, sans-serif',
                    fontWeight: 700, 
                    fontSize: { sm: '18px', md: '34px' }, 
                    marginBottom: { sm: '34px', md: '68px' },
                    lineHeight: { sm: '25px', md: '48px' },
                    letterSpacing: '4%' 
                }}
              >
                Calculate your daily calorie intake right now
              </Typography>
                <Box sx={{ display: 'flex', flexDirection: flexDirection }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: '32px' }}>
                    <TextField
                      id="standard-multiline-flexible"
                      label="Height*"
                      multiline
                      variant="standard"
                      sx={{
                        '& .MuiInputLabel-root': {
                          fontFamily: 'Verdana',
                          fontWeight: 700,
                          fontSize: '14px',
                          lineHeight: '17px',
                          letterSpacing: {
                            xs: '0.04em',
                            sm: 'unset'
                          }
                        }
                      }}
                    />
                    <TextField
                      id="standard-textarea"
                      label="Age*"
                      multiline
                      variant="standard"
                      sx={{
                        '& .MuiInputLabel-root': {
                          fontFamily: 'Verdana',
                          fontWeight: 700,
                          fontSize: '14px',
                          lineHeight: '17px',
                          letterSpacing: {
                            xs: '0.04em',
                            sm: 'unset'
                          }
                        }
                      }}
                    />
                    <TextField
                      id="standard-textarea"
                      label="Current weight*"
                      multiline
                      variant="standard"
                      sx={{
                        '& .MuiInputLabel-root': {
                          fontFamily: 'Verdana',
                          fontWeight: 700,
                          fontSize: '14px',
                          lineHeight: '17px',
                          letterSpacing: {
                            xs: '0.04em',
                            sm: 'unset'
                          }
                        }
                      }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                      id="standard-textarea"
                      label="Desired weight*"
                      multiline
                      variant="standard"
                      sx={{
                        '& .MuiInputLabel-root': {
                          fontFamily: 'Verdana',
                          fontWeight: 700,
                          fontSize: '14px',
                          lineHeight: '17px',
                          letterSpacing: {
                            xs: '0.04em',
                            sm: 'unset'
                          }
                        }
                      }}/>
                      <FormControl component="fieldset">
                        <FormLabel 
                        id="demo-radio-group-label"
                        sx={{ 
                            marginTop: '30px', 
                            marginLeft: '10px', 
                            fontFamily: 'Verdana',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '17px',
                            letterSpacing: {
                              xs: '0.04em',
                              sm: 'unset'
                            }
                          }} >
                          Blood type*</FormLabel>
                        <RadioGroup
                          aria-labelledby="demo-radio-group-label"
                          name="row-radio-buttons-group"
                          sx={{ flexDirection: 'row', marginLeft: '10px'}}>
                          <FormControlLabel value="female" control={<Radio />} label="1" />
                          <FormControlLabel value="male" control={<Radio />} label="2" />
                          <FormControlLabel value="other" control={<Radio />} label="3" />
                          <FormControlLabel value="disabled" control={<Radio />} label="4" />
                        </RadioGroup>
                      </FormControl>
                  </Box>
                </Box>
            </Box>
            <Box
                    sx={{
                        display: 'flex',
                        justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'flex-start',
                        },
                    }}
                    >
                    <Button
                        variant="contained"
                        sx={{
                        width: '210px',
                        height: '43px',
                        marginTop: '30px',
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
                              sm: 'unset'
                            },
                        '&:hover': {
                            background: '#FC842D',
                        },
                        }}
                        >
                        Start losing weight
                    </Button>
                </Box>
        </Box>
  </>
  );
};

export default DailyCaloriesForm;