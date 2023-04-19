import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct } from 'redux/product/operations';
import { selectProducts } from 'redux/product/selectors';

import moment from 'moment/moment';
import AddIcon from '@mui/icons-material/Add';
import {
  Autocomplete,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import {
  FabStyled,
  FieldStyled,
  FormStyled,
  ButtonStyled,
} from './DairyAddProduct.styled';

export default function DairyAddProductForm() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width:767px)');
  const [weight, setWeight] = useState('');
  const [title, setTitle] = useState('');
  const [choosenProduct, setChoosenProduct] = useState(null);
  const products = useSelector(selectProducts);
  const date = moment(new Date()).format('yyyy-MM-DD');

  console.log(products);

  useEffect(() => {
    if (title.length >= 2) dispatch(fetchProducts(title));
  }, [dispatch, title]);

  const handleChangeProduct = e => {
    const { value } = e.currentTarget;
    console.log('e: ', e.target.value);
    setTitle(value);
  };
  const handleChangeWeight = e => {
    const { value } = e.currentTarget;
    setWeight(value);
  };

  const reset = () => {
    setTitle('');
    setWeight('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const productId = products.find(prod => prod.title.ua === title._id);
    const newProduct = {
      date,
      productId,
      weight,
    };
    dispatch(addProduct(newProduct));
    reset();
  };

  const hanldeOnClik = e => {};

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <div className="wrapper">
          <Autocomplete
            sx={{ display: { xs: 'block', md: 'inline-block' } }}
            disablePortal
            id="combo-box-demo"
            freeSolo
            value={title}
            noOptionsText={'No products'}
            options={products}
            renderInput={params => (
              <FieldStyled
                required
                {...params}
                value={title}
                onChange={handleChangeProduct}
                id="filled-product"
                label={'Enter product name'}
                name="product"
                variant="filled"
              />
            )}
          />
          <TextField
            required
            label={'Grams'}
            id="filled-number"
            name="grams"
            type="number"
            value={weight}
            onChange={handleChangeWeight}
            sx={{
              width: {
                xs: 280,
                md: 150,
              },

              mx: 3,
              margin: {
                xs: 0,
              },
              marginBottom: {
                xs: '60px',
                md: 0,
              },
              '&.MuiTextField-root .MuiInputBase-root': {
                backgroundColor: 'white',
                '::before': {
                  borderColor: '#e0e0e0',
                },
              },
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            inputProps={{
              inputMode: 'numeric',
              pattern: 'd{4}',
              max: 2000,
            }}
            variant="filled"
          />

          <ButtonStyled
            sx={{
              display: {
                xs: 'block',
                md: 'none',
              },
              margin: '0 auto',
              backgroundColor: '#FC842D',
              marginBottom: '20px',
              boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
            }}
            type="submit"
            variant="contained"
          >
            Add
          </ButtonStyled>
        </div>

        <div>
          <ul>
            {products.map(product => (
              <li>
                <p>{product.title.ua}</p>
              </li>
            ))}
          </ul>
        </div>

        <FabStyled aria-label="add" type={isMobile ? 'button' : 'submit'}>
          <AddIcon />
        </FabStyled>
      </FormStyled>
    </>
  );
}

// const DairyAddProduct = () => {

//     return (
//         <form autoComplete="off" onSubmit={handleSubmit}>
//             <Wrap>
//                 <AddTitleInput
//                     onChange={handleChangeProduct}
//                     type="text"
//                     name="title"
//                     value={title}
//                     placeholder="Enter product name"
//                     list="listProducts"
//                     required
//                 />
//                 <datalist id="listProducts">
//                     {products?.length > 0 &&
//                         products?.map(prod => {
//                             return (
//                                 <option key={prod._id} value={prod.title.ua} id={prod._id} />
//                             );
//                         })}
//                 </datalist>

//                 <AddWeightInput
//                     onChange={handleChangeWeight}
//                     type="number"
//                     name="weight"
//                     value={weight}
//                     placeholder="Grams"
//                     required
//                 />

//                 <AddBtn type="submit">
//                     <img src={Add} alt="Add button" />
//                 </AddBtn>
//             </Wrap>
//         </form>
//     );
// };
// export default DairyAddProduct;
