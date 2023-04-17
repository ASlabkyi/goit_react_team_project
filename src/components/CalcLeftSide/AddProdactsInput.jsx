import { Box, useMediaQuery } from '@mui/material';
import './CalcLeftSide.css';

const AddProdactsInput = () => {
  const isDisktop = useMediaQuery('((min-width:1280px))');

  let gap = '24px';

  if (isDisktop) {
    gap = '48px';
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: gap,
      }}
    >
      <lebel className="lebel lebelProduct">
        Enter product name
        <input type="text" className="input" />
      </lebel>
      <lebel className="lebel lebelGrams">
        Grams
        <input type="text" className="input" />
      </lebel>
    </Box>
  );
};

export default AddProdactsInput;
