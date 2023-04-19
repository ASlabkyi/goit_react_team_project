import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateDailyRate,
  calculateDailyLoggedIn,
} from '../../redux/dailyRate/operations';
import { DailyCalModal } from 'components/DailyCalModal/DailyCalModal';
import { selectId, selectIsLoggedIn } from '../../redux/auth/selectors';
import {
  FormControl,
  useMediaQuery,
  Button,
  Typography,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  TextField,
} from '@mui/material';

const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const id = useSelector(selectId);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (
      height !== '' &&
      age !== '' &&
      weight !== '' &&
      desiredWeight !== '' &&
      window.innerWidth > 767
    ) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  const [height, setHeight] = useState('');
  const [heightError, setHeightError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [weight, setWeight] = useState('');
  const [weightError, setWeightError] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [desiredWeightError, setDesiredWeightError] = useState('');
  const [bloodType, setBloodType] = useState(1);
  const [bloodTypeError, setBloodTypeError] = useState('');

  const handleHeightChange = event => {
    const input = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(input)) {
      setHeight(Number(input));
      setHeightError('');
    } else {
      setHeightError('Please enter a valid number, on example "173"');
    }
  };

  const handleAgeChange = event => {
    const input = event.target.value;
    const regex = /^\d+$/;
    if (regex.test(input)) {
      setAge(Number(input));
      setAgeError('');
    } else {
      setAgeError('Please enter a valid number, on example "30"');
    }
  };
  const handleWeightChange = event => {
    const input = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(input)) {
      setWeight(Number(input));
      setWeightError('');
    } else {
      setWeightError('Please enter a valid number, on example "70"');
    }
  };

  const handleDesiredWeightChange = event => {
    const input = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(input)) {
      setDesiredWeight(Number(input));
      setDesiredWeightError('');
    } else {
      setDesiredWeightError('Please enter a valid number, on example "65"');
    }
  };

  const handleBloodTypeChange = event => {
    setBloodType(parseInt(event.target.value));
    setBloodTypeError('');
  };

  const isMobile = useMediaQuery('(max-width:767px)');
  const flexDirection = isMobile ? 'column' : 'row';

  const [dailyRate, setDailyRate] = useState(0);
  const [notAllowedProducts, setNotAllowedProducts] = useState(0);
  const data = { height, weight, age, desiredWeight, bloodType };

  const handleCalculate = () => {
    if (isLoggedIn) {
      dispatch(calculateDailyLoggedIn({ id, data }))
        .unwrap()
        .then(result => {
          setDailyRate(result.dailyRate);
          setNotAllowedProducts(result.notAllowedProducts);
          setOpen(true);
        })
        .catch(error => console.log('error', error));
    } else {
      dispatch(calculateDailyRate(data))
        .unwrap()
        .then(result => {
          setDailyRate(result.dailyRate);
          setNotAllowedProducts(result.notAllowedProducts);
          setOpen(true);
        })
        .catch(error => console.log('error', error));
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    let formErrors = false;

    if (height === '') {
      setHeightError('Please enter your height');
      formErrors = true;
    }
    if (age === '') {
      setAgeError('Please enter your age');
      formErrors = true;
    }
    if (weight === '') {
      setWeightError('Please enter your current weight');
      formErrors = true;
    }
    if (desiredWeight === '') {
      setDesiredWeightError('Please enter your desired цeight');
      formErrors = true;
    }

    if (bloodType === '') {
      setBloodTypeError('Please select your blood type');
      formErrors = true;
    }

    if (!formErrors) {
      handleCalculate();
      setHeight('');
      setAge('');
      setWeight('');
      setDesiredWeight('');
      setBloodType('');
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start', lg: 'flex-start' },
            minWidth: { xs: '100%', md: '704px', lg: '608px' },
            minHeight: { xs: 'auto', md: '343px' },
            paddingLeft: { xs: '20px', md: '32px', lg: '16px' },
            paddingRight: { xs: '20px', md: '32px', lg: '16px' },
            paddingTop: { xs: '32px', md: '100px', lg: '147px' },
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
        >
          <Typography
            variant="h1"
            textAlign="start"
            justifyContent="center"
            sx={{
              fontFamily: 'Verdana, sans-serif',
              fontWeight: 700,
              fontSize: { sm: '18px', md: '34px' },
              marginBottom: { sm: '34px', md: '38px' },
              lineHeight: { sm: '25px', md: '48px' },
              letterSpacing: '4%',
            }}
          >
            Calculate your daily calorie intake right now
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: flexDirection }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '32px',
              }}
            >
              <TextField
                id="standard-multiline-flexible"
                label="Height"
                variant="standard"
                type="number"
                value={height}
                onChange={handleHeightChange}
                required={true}
                helperText={heightError}
                error={!!heightError}
                sx={{
                  '& .MuiInputLabel-root': {
                    fontFamily: 'Verdana',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    letterSpacing: {
                      xs: '0.04em',
                      sm: 'unset',
                    },
                  },
                }}
              />
              <TextField
                id="standard-textarea"
                label="Age"
                variant="standard"
                type="number"
                value={age}
                onChange={handleAgeChange}
                required={true}
                helperText={ageError}
                error={!!ageError}
                sx={{
                  '& .MuiInputLabel-root': {
                    fontFamily: 'Verdana',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    letterSpacing: {
                      xs: '0.04em',
                      sm: 'unset',
                    },
                  },
                }}
              />
              <TextField
                id="standard-textarea"
                label="Current weight"
                type="number"
                variant="standard"
                value={weight}
                onChange={handleWeightChange}
                required={true}
                helperText={weightError}
                error={!!weightError}
                sx={{
                  '& .MuiInputLabel-root': {
                    fontFamily: 'Verdana',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    letterSpacing: {
                      xs: '0.04em',
                      sm: 'unset',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                id="standard-textarea"
                label="Desired weight"
                type="number"
                variant="standard"
                value={desiredWeight}
                onChange={handleDesiredWeightChange}
                required={true}
                helperText={desiredWeightError}
                error={!!desiredWeightError}
                sx={{
                  '& .MuiInputLabel-root': {
                    fontFamily: 'Verdana',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    letterSpacing: {
                      xs: '0.04em',
                      sm: 'unset',
                    },
                  },
                }}
              />
              <FormControl
                component="fieldset"
                required
                error={bloodTypeError !== ''}
              >
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
                      sm: 'unset',
                    },
                  }}
                >
                  Blood type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-group-label"
                  name="bloodType"
                  sx={{ flexDirection: 'row', marginLeft: '10px' }}
                  value={bloodType}
                  onChange={handleBloodTypeChange}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                </RadioGroup>
              </FormControl>
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
              type="submit"
              onClick={handleOpen}
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
            <DailyCalModal
              open={open}
              handleClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              dailyRate={dailyRate}
              notAllowedProducts={notAllowedProducts}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default DailyCaloriesForm;
