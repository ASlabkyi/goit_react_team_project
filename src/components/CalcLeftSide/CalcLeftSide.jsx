import { Box, useMediaQuery } from '@mui/material';
import './CalcLeftSide.css';

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

  if (isTablet) {
  }

  if (isDisktop) {
  }

  return (
    <Box
      sx={{
        width: '320px',
        height: '453px',
      }}
    >
      <Box
        sx={{
          width: '320px',
          padding: '33px 14px 60px 20px',
          overflowY: 'scroll',
          height: '453px',

          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transporent',
          },

          '&::-webkit-scrollbar-thumb': {
            width: '6px',
            backgroundColor: '#264061',
            borderRadius: '20px',
          },
        }}
      >
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
        <Box
          sx={{
            marginBottom: '60px',
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
                      gap: '8px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '8px',
                      }}
                    >
                      <Box className="params" sx={{ width: '130px' }}>
                        {title}
                      </Box>
                      <Box className="params" sx={{ width: '49px' }}>
                        {weight} g
                      </Box>
                      <Box
                        className="params"
                        sx={{ width: '74px', textAlign: 'right' }}
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
                          stroke-width="2"
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

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button className="buttonAdd">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <g clip-path="url(#a)">
                <path
                  fill="#fff"
                  d="M18.72 12.96h-5.76v5.76h-1.92v-5.76H5.28v-1.92h5.76V5.28h1.92v5.76h5.76v1.92Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M.48.48h23.04v23.04H.48z" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default CalcLeftSide;
// style="width: 48px; height: 48px; background-color: var(--orange-color); border-radius: 50%;"
