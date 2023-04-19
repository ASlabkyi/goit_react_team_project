import { Box, useMediaQuery } from '@mui/material';
import ButtonAdd from './buttonAdd';
import DateAndCalendar from './DateAndCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteProduct } from 'redux/dayInfo/operations';

const ListOfProdacts = () => {
  const data = useSelector(state => state.dayInfo.eatenProducts);
  const dayId = useSelector(state => state.dayInfo?.id);
  const dispatch = useDispatch();

  const handleDelete = id => {
    const value = { dayId, eatenProductId: id };
    console.log(value);
    dispatch(setDeleteProduct(value));
  };

  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1279px)');
  const isDisktop = useMediaQuery('((min-width:1280px))');

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
      {!isTablet && !isDisktop && <DateAndCalendar />}
      <Box
        sx={{
          marginBottom: listBoxMarginBottom,
        }}
      >
        <ul>
          {data?.map(el => {
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
                  <button
                    className="buttoneDelite"
                    onClick={() => handleDelete(id)}
                  >
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
  );
};

export default ListOfProdacts;
