import { Box, useMediaQuery } from '@mui/material';
import imageDesktop from '../../images/bg-pictures/desktop/side-bar-leaves.png';
import imageTablet from '../../images/bg-pictures/tablet/sideBarLeaves768_1x.png';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const CalcRightSide = () => {
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1279px)');
  const isDisktop = useMediaQuery('((min-width:1280px))');
  const notRecomended = useSelector(
    state => state.dailyRate.notAllowedProducts
  );
  console.log(notRecomended[0]);

  const kcalLeft1 = useSelector(state => state.dayInfo.daySummary?.kcalLeft);
  const kcalConsumed1 = useSelector(
    state => state.dayInfo.daySummary?.kcalConsumed
  );
  const dailyRate1 = useSelector(state => state.dayInfo.daySummary?.dailyRate);
  const percentsOfDailyRate1 = useSelector(
    state => state.dayInfo.daySummary?.percentsOfDailyRate
  );

  let mainFlexDirection = 'column';
  let mainWidth = '320px';
  let mainPaddingTop = '40px';
  let mainPaddingBottom = '24px';
  let mainPaddingLeft = '20px';
  let mainPaddingRight = '20px';
  let minHeight = '433px';
  let listWidth = '280px';
  let mainGap = '40px';
  let image = null;
  let bgImageWidth = '0';
  let bgImageHeight = '0';
  let bgImageTop = '0';
  let bgImageLeft = '0';

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
    image = imageTablet;
    bgImageWidth = '602px';
    bgImageHeight = '428px';
    bgImageTop = '-36px';
    bgImageLeft = '399px';
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
    image = imageDesktop;
    bgImageWidth = '740px';
    bgImageHeight = '740px';
    bgImageTop = '35px';
    bgImageLeft = '12px';
  }

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'var(--gray-bg-color)',
        maxWidth: mainWidth,
        minHeight: minHeight,
        paddingTop: mainPaddingTop,
        paddingBottom: mainPaddingBottom,
        paddingLeft: mainPaddingLeft,
        paddingRight: mainPaddingRight,
        margin: '0 auto',
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
            <li style={{ textAlign: 'right' }}>
              {kcalLeft1 ? `${kcalLeft1}` : `000`} kcal
            </li>
            <li style={{ textAlign: 'right' }}>
              {kcalConsumed1 ? `${kcalConsumed1}` : `000`} kcal
            </li>
            <li style={{ textAlign: 'right' }}>
              {dailyRate1 ? `${dailyRate1}` : `000`} kcal
            </li>
            <li style={{ textAlign: 'right' }}>
              {percentsOfDailyRate1
                ? `${Math.round(percentsOfDailyRate1)}`
                : `000`}{' '}
              %
            </li>
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
          {notRecomended[0] ? (
            <ul>
              {notRecomended.slice(0, 5).map(el => (
                <li key={nanoid()}>{el}</li>
              ))}
            </ul>
          ) : (
            <p>Your diet will be displayed here</p>
          )}
        </Box>
      </Box>

      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          width: bgImageWidth,
          height: bgImageHeight,
          position: 'absolute',
          top: bgImageTop,
          left: bgImageLeft,
        }}
      ></div>

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
