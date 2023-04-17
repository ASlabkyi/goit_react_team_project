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
      <label className="label labelProduct">
        Enter product name
        <input type="text" className="input" />
      </label>
      <label className="label labelGrams">
        Grams
        <input type="text" className="input" />
      </label>
    </Box>
  );
};

export default AddProdactsInput;
