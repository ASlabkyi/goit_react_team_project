import { Box } from '@mui/material';
import './CalcLeftSide.css';

const BottonAdd = () => {
  return (
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
  );
};

export default BottonAdd;
