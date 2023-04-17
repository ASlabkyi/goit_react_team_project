import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calculateDailyRate } from '../../redux/dailyRate/operations';

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

  const [height, setHeight] = useState('');
  const [heightError, setHeightError] = useState('');
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  const [weight, setWeight] = useState('');
  const [weightError, setWeightError] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [desiredWeightError, setDesiredWeightError] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [bloodTypeError, setBloodTypeError] = useState('');

  const handleHeightChange = event => {
    const input = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(input)) {
      setHeight(input);
      setHeightError('');
    } else {
      setHeightError('Please enter a valid number, on example "173"');
    }
  };

  const handleAgeChange = event => {
    const input = event.target.value;
    const regex = /^\d+$/;
    if (regex.test(input)) {
      setAge(input);
      setAgeError('');
    } else {
      setAgeError('Please enter a valid number, on example "30"');
    }
  };

  const handleWeightChange = event => {
    const input = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(input)) {
      setWeight(input);
      setWeightError('');
    } else {
      setWeightError('Please enter a valid number, on example "70"');
    }
  };

  const handleDesiredWeightChange = event => {
    const input = event.target.value;
    const regex = /^\d*\.?\d*$/;
    if (regex.test(input)) {
      setDesiredWeight(input);
      setDesiredWeightError('');
    } else {
      setDesiredWeightError('Please enter a valid number, on example "65"');
    }
  };

  const handleBloodTypeChange = event => {
    setBloodType(event.target.value);
    setBloodTypeError('');
  };

  const isMobile = useMediaQuery('(max-width:767px)');
  const flexDirection = isMobile ? 'column' : 'row';

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
      dispatch(
        calculateDailyRate({ height, age, weight, desiredWeight, bloodType })
      );
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
                multiline
                variant="standard"
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
                multiline
                variant="standard"
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
                multiline
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
                multiline
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
        </Box>
      </Box>
    </>
  );
};

export default DailyCaloriesForm;
