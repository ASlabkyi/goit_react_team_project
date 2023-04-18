import { Box, useMediaQuery } from '@mui/material';
import ButtonAdd from './buttonAdd';
import './DiaryLeftSide.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct } from 'redux/product/operations';
import { selectProducts } from 'redux/product/selectors';
import moment from 'moment/moment';
import DairyAddProductForm from 'components/DairyAddProduct/DairyAddProduct';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DateAndCalendar from './DateAndCalendar';
import ListOfProdacts from './ListOfProdacts';
import { nanoid } from '@reduxjs/toolkit';

const DiaryLeftSide = () => {
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1279px)');
  const isDisktop = useMediaQuery('((min-width:1280px))');

  let meinBoxWidth = '320px';
  let meinBoxHeight = '453px';
  let meinBoxPadding = '0px 0px 0px 0px';
  let meinBoxMargin = '0px auto 0px auto';

  if (isTablet) {
    meinBoxWidth = '768px';
    meinBoxHeight = '594px';
    meinBoxPadding = '100px 126px 55px 32px';
    meinBoxMargin = '0px auto 0px auto';
  }

  if (isDisktop) {
    meinBoxWidth = '763px';
    meinBoxHeight = '850px';
    meinBoxPadding = '293px 120px 56px 16px';
    meinBoxMargin = '0px auto 0px auto';
  }
  ///////////////////
  // const dispatch = useDispatch();
  // const [weight, setWeight] = useState('');
  // const [title, setTitle] = useState('');
  // const products = useSelector(selectProducts);
  // const date = moment(new Date()).format('yyyy-MM-DD');

  // useEffect(() => {
  //   if (title.length >= 2) dispatch(fetchProducts(title));
  // }, [dispatch, title]);

  // const handleChangeProduct = e => {
  //   const { value } = e.currentTarget;
  //   setTitle(value);
  // };
  // const handleChangeWeight = e => {
  //   const { value } = e.currentTarget;
  //   setWeight(value);
  // };

  // const reset = () => {
  //   setTitle('');
  //   setWeight('');
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const productId = products.find(prod => prod.title.ua === title)._id;
  //   const newProduct = {
  //     date,
  //     productId,
  //     weight,
  //   };
  //   dispatch(addProduct(newProduct));
  //   reset();
  // }

  return (
    <>
      <Box
        sx={{
          width: meinBoxWidth,
          height: meinBoxHeight,
          padding: meinBoxPadding,
          margin: meinBoxMargin,
        }}
      >
        {(isTablet || isDisktop) && <DateAndCalendar />}
        {(isTablet || isDisktop) && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '60px',
              gap: '87px',
            }}
          >
            <form
              style={{ display: 'contents' }}
              autoComplete="off"
              // onSubmit={handleSubmit}
            >
              <label className="label labelProduct">
                Enter product name
                <div className="searchProducts">
                  <ul>
                    {/* {data.map(el => (
                      <li key={nanoid()}>{el}</li>
                    ))} */}
                  </ul>
                </div>
                <input
                  // onChange={handleChangeProduct}
                  type="text"
                  className="input"
                  name="title"
                  // value={title}
                  list="listProducts"
                  required
                />
              </label>
              <label className="label labelGrams">
                Grams
                <input
                  // onChange={handleChangeWeight}
                  type="number"
                  name="weight"
                  // value={weight}
                  required
                  className="input"
                />
              </label>
              <ButtonAdd />
            </form>
            {/* <DairyAddProductForm></DairyAddProductForm> */}
          </Box>
        )}
        <ListOfProdacts />
      </Box>
    </>
    // <Box
    //   sx={{
    //     width: meinBoxWidth,
    //     height: meinBoxHeight,
    //     padding: meinBoxPadding,
    //     margin: meinBoxMargin,
    //   }}
    // >
    //   )}
    //   {(isTablet || isDisktop) && (
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         marginBottom: '60px',
    //         gap: '87px',
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           display: 'flex',
    //           gap: isDisktop ? '48px' : '24px',
    //         }}
    //       >
    //         <form style={{ display: 'contents' }} autoComplete="off" onSubmit={handleSubmit}>
    //           <label className="label labelProduct">
    //             Enter product name
    //             <input
    //               onChange={handleChangeProduct}
    //               type="text"
    //               className="input"
    //               name="title"
    //               value={title}
    //               list="listProducts"
    //               required
    //             />
    //             <datalist id="listProducts">
    //               {products?.length > 0 &&
    //                 products?.map(prod => {
    //                   return (
    //                     <option key={prod._id} value={prod.title.ua} id={prod._id} />
    //                   );
    //                 })}
    //             </datalist>
    //           </label>
    //           <label className="label labelGrams">
    //             Grams
    //             <input
    //               onChange={handleChangeWeight}
    //               type="number"
    //               name="weight"
    //               value={weight}
    //               required
    //               className="input"
    //             />
    //           </label>
    //           <ButtonAdd />
    //         </form>
    //       </Box>
    //     </Box>
    //   )
    //   }
    //   <Box
    //     sx={{
    //       width: listBoxWidth,
    //       padding: listBoxPadding,
    //       height: listBoxHeight,
    //       margin: listBoxMargin,

    //       overflowY: 'scroll',
    //       '&::-webkit-scrollbar': {
    //         width: '6px',
    //       },
    //       '&::-webkit-scrollbar-track': {
    //         background: '#F0F1F3',
    //       },

    //       '&::-webkit-scrollbar-thumb': {
    //         width: '6px',
    //         backgroundColor: '#264061',
    //         borderRadius: '20px',
    //       },
    //     }}
    //   >
    //     {!isTablet && !isDisktop && (
    //       <Box
    //         sx={{
    //           fontWeight: '700',
    //           fontSize: '18px',
    //           lineHeight: '22px',
    //           color: '#212121',
    //           display: 'flex',
    //           gap: '20px',
    //           marginBottom: '32px',
    //         }}
    //       >
    //         <span>20.06.2020</span>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="20"
    //           height="20"
    //           fill="none"
    //         >
    //           <path
    //             fill="#9B9FAA"
    //             d="M15 9h-2v2h2V9ZM11 9H9v2h2V9ZM7 9H5v2h2V9Z"
    //           />
    //           <path
    //             fill="#9B9FAA"
    //             d="M17 2h-1V0h-2v2H6V0H4v2H3c-1.11 0-1.99.9-1.99 2L1 18a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 16H3V7h14v11Z"
    //           />
    //         </svg>
    //       </Box>
    //     )}
    //     <Box
    //       sx={{
    //         marginBottom: listBoxMarginBottom,
    //       }}
    //     >
    //       <ul>
    //         {data.map(el => {
    //           const { title, weight, kcal, id } = el;
    //           return (
    //             <li key={id} className="listItem">
    //               <Box
    //                 sx={{
    //                   display: 'flex',
    //                   gap: listBoxGapButtonDelite,
    //                 }}
    //               >
    //                 <Box
    //                   sx={{
    //                     display: 'flex',
    //                     gap: listBoxGap,
    //                   }}
    //                 >
    //                   <Box className="params" sx={{ width: titleWidth }}>
    //                     {title}
    //                   </Box>
    //                   <Box className="params" sx={{ width: weightWidth }}>
    //                     {weight} g
    //                   </Box>
    //                   <Box
    //                     className="params"
    //                     sx={{ width: kcalWidth, textAlign: 'right' }}
    //                   >
    //                     {kcal} kcal
    //                   </Box>
    //                 </Box>
    //                 <button className="buttoneDelite">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="14"
    //                     height="14"
    //                     fill="none"
    //                   >
    //                     <path
    //                       stroke="#9B9FAA"
    //                       strokeWidth="2"
    //                       d="m1 1 12 12M1 13 13 1"
    //                     />
    //                   </svg>
    //                 </button>
    //               </Box>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </Box>

    //     {!isTablet && !isDisktop && <ButtonAdd />}
    //   </Box>
    // </Box >
  );
};

export default DiaryLeftSide;
