import { Box, useMediaQuery } from '@mui/material';
import './DiaryLeftSide.css';
import ButtonAdd from './buttonAdd';
import AddProdactsInput from './AddProdactsInput';

const data = [
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2bjmmjm0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3bmjmjmj7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3jmjmjb7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4jmjmjd-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0jmjmjds7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0jmjmjd7b3dcdb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7bnh3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-hn2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1dtyeb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcbty6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdytd-2b0d7b3dctyb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3byt7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deytb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3tb7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0tyd7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-ty2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4tyd-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4yibad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdkyid-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bddkik-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4badyi-9bdd-2b0kd7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9byidd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-l4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-u9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb45d-3b7d-64bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd6-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7yd-4bad-9bddj-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4yd-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0,dy7b3dcb6d',
  },
  {
    title: 'Меланж яєчний',
    weight: 100,
    kcal: 157,
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0dy7b3dcb6d',
  },
];

const CalcLeftSide = () => {
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1279px)');
  const isDisktop = useMediaQuery('((min-width:1280px))');

  let meinBoxWidth = '320px';
  let meinBoxHeight = '453px';
  let meinBoxPadding = '0px 0px 0px 0px';
  let meinBoxMargin = '0px auto 0px auto';

  let listBoxWidth = '320px';
  let listBoxHeight = '453px';
  let listBoxPadding = '33px 14px 60px 20px';
  let listBoxMargin = '0px auto 0px auto';
  let listBoxGap = '8px';
  let listBoxGapButtonDelite = '8px';
  let listBoxMarginBottom = '60px';

  let titleWidth = '130px';
  let weightWidth = '49px';
  let kcalWidth = '74px';

  if (isTablet) {
    meinBoxWidth = '768px';
    meinBoxHeight = '594px';
    meinBoxPadding = '100px 126px 55px 32px';
    meinBoxMargin = '0px auto 0px auto';

    listBoxWidth = '610px';
    listBoxHeight = '250px';
    listBoxPadding = '0px auto 0px 0px';
    listBoxGap = '35px';
    listBoxGapButtonDelite = '31px';
    listBoxMarginBottom = '0px';

    titleWidth = '240px';
    weightWidth = '104px';
    kcalWidth = '105px';
  }

  if (isDisktop) {
    meinBoxWidth = '763px';
    meinBoxHeight = '850px';
    meinBoxPadding = '293px 120px 56px 16px';
    meinBoxMargin = '0px auto 0px auto';

    listBoxWidth = '624px';
    listBoxHeight = '279px';
    listBoxPadding = '0px auto 0px 0px';
    listBoxGap = '40px';
    listBoxGapButtonDelite = '31px';
    listBoxMarginBottom = '0px';

    titleWidth = '240px';
    weightWidth = '104px';
    kcalWidth = '105px';
  }

  return (
    <Box
      sx={{
        width: meinBoxWidth,
        height: meinBoxHeight,
        padding: meinBoxPadding,
        margin: meinBoxMargin,
      }}
    >
      {(isTablet || isDisktop) && (
        <Box
          sx={{
            fontWeight: '700',
            fontSize: '34px',
            lineHeight: '41px',
            color: '#212121',
            display: 'flex',
            gap: '20px',
            marginBottom: '60px',
            alignItems: 'center',
          }}
        >
          <span>20.06.2020</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              fill="#9B9FAA"
              d="M15 9h-2v2h2V9ZM11 9H9v2h2V9ZM7 9H5v2h2V9Z"
            />
            <path
              fill="#9B9FAA"
              d="M17 2h-1V0h-2v2H6V0H4v2H3c-1.11 0-1.99.9-1.99 2L1 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 16H3V7h14v11Z"
            />
          </svg>
        </Box>
      )}
      {(isTablet || isDisktop) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '60px',
            gap: '87px',
          }}
        >
          <AddProdactsInput></AddProdactsInput>
          <ButtonAdd />
        </Box>
      )}
      <Box
        sx={{
          width: listBoxWidth,
          padding: listBoxPadding,
          height: listBoxHeight,
          margin: listBoxMargin,

          overflowY: 'scroll',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#F0F1F3',
          },

          '&::-webkit-scrollbar-thumb': {
            width: '6px',
            backgroundColor: '#264061',
            borderRadius: '20px',
          },
        }}
      >
        {!isTablet && !isDisktop && (
          <Box
            sx={{
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '22px',
              color: '#212121',
              display: 'flex',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            <span>20.06.2020</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                fill="#9B9FAA"
                d="M15 9h-2v2h2V9ZM11 9H9v2h2V9ZM7 9H5v2h2V9Z"
              />
              <path
                fill="#9B9FAA"
                d="M17 2h-1V0h-2v2H6V0H4v2H3c-1.11 0-1.99.9-1.99 2L1 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 16H3V7h14v11Z"
              />
            </svg>
          </Box>
        )}
        <Box
          sx={{
            marginBottom: listBoxMarginBottom,
          }}
        >
          <ul>
            {data.map(el => {
              const { title, weight, kcal, id } = el;
              return (
                <li key={id} className="listItem">
                  <Box
                    sx={{
                      display: 'flex',
                      gap: listBoxGapButtonDelite,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: listBoxGap,
                      }}
                    >
                      <Box className="params" sx={{ width: titleWidth }}>
                        {title}
                      </Box>
                      <Box className="params" sx={{ width: weightWidth }}>
                        {weight} g
                      </Box>
                      <Box
                        className="params"
                        sx={{ width: kcalWidth, textAlign: 'right' }}
                      >
                        {kcal} kcal
                      </Box>
                    </Box>
                    <button className="buttoneDelite">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                      >
                        <path
                          stroke="#9B9FAA"
                          strokeWidth="2"
                          d="m1 1 12 12M1 13 13 1"
                        />
                      </svg>
                    </button>
                  </Box>
                </li>
              );
            })}
          </ul>
        </Box>

        {!isTablet && !isDisktop && <ButtonAdd />}
      </Box>
    </Box>
  );
};

export default CalcLeftSide;
