import { Box, useMediaQuery } from '@mui/material';

const CalcRightSide = () => {
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1279px)');
  const isDisktop = useMediaQuery('((min-width:1280px))');

  let notRecommendedFood = false;

  let mainFlexDirection = 'column';
  let mainWidth = '320px';
  let mainPaddingTop = '40px';
  let mainPaddingBottom = '24px';
  let mainPaddingLeft = '20px';
  let mainPaddingRight = '20px';
  let minHeight = '433px';
  let listWidth = '280px';
  let mainGap = '40px';

  if (isTablet) {
    mainFlexDirection = 'row';
    mainWidth = '768px';
    mainPaddingTop = '80px';
    mainPaddingBottom = '80px';
    mainPaddingLeft = '32px';
    mainPaddingRight = '80px';
    minHeight = '326px';
    listWidth = '288px';
    mainGap = '80px';
  }

  if (isDisktop) {
    mainWidth = '517px';
    mainPaddingTop = '292px';
    mainPaddingBottom = '20px';
    mainPaddingLeft = '106px';
    mainPaddingRight = '123px';
    minHeight = '850px';
    listWidth = '288px';
    mainGap = '60px';
  }

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'var(--gray-bg-color)',
        width: mainWidth,
        minHeight: minHeight,
        paddingTop: mainPaddingTop,
        paddingBottom: mainPaddingBottom,
        paddingLeft: mainPaddingLeft,
        paddingRight: mainPaddingRight,
        display: 'flex',
        flexDirection: mainFlexDirection,
        gap: mainGap,
        fontSize: '14px',
        lineHeight: '17px',
        letterSpacing: '0.04em',
      }}
    >
      <Box
        sx={{
          width: listWidth,
        }}
      >
        <Box
          sx={{
            fontWeight: '700',
            color: 'var(--black-color)',
            marginBottom: '20px',
          }}
        >
          Summary for 20.06.2020
        </Box>

        <Box
          sx={{
            fontWeight: '400',
            color: 'var(--gray-text-color)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <ul>
            <li>Left</li>
            <li>Consumed</li>
            <li>Daily rate</li>
            <li>n% of normal</li>
          </ul>
          <ul>
            <li>kcal</li>
            <li>kcal</li>
            <li>kcal</li>
            <li>%</li>
          </ul>
        </Box>
      </Box>
      <Box
        sx={{
          width: listWidth,
        }}
      >
        <Box
          sx={{
            width: listWidth,
            fontWeight: '700',
            color: 'var(--black-color)',
            marginBottom: '20px',
          }}
        >
          Food not recommended
        </Box>

        <Box
          sx={{
            fontWeight: '400',
            color: 'var(--gray-text-color)',
          }}
        >
          {notRecommendedFood ? (
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          ) : (
            <p>Your diet will be displayed here</p>
          )}
        </Box>
      </Box>
      {/* <Box
        sx={{
          width: '100px',
          height: '100px',
          position: 'absolute',
          bgcolor: 'pink',
          backgroundImage:
            'url("../../images/bg-pictures/desktop/side-bar-leaves.png")',
        }}
      ></Box> */}
    </Box>
  );
};

export default CalcRightSide;
