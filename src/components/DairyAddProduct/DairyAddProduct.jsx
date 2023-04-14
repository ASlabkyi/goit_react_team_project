import { useState, useRef } from 'react';
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
    ButtonStyled
} from './DairyAddProduct.styled';

export default function DairyAddProductForm() {
    const [query, setQuery] = useState('');
    const [weigth, setWeigth] = useState('');
    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');

    const isMobile = useMediaQuery('(max-width:767px)');
    const formEl = useRef();
    const buttonEl = useRef();

    return (
        <>
            <FormStyled >
                <div className="wrapper" ref={formEl}>
                    <Autocomplete
                        sx={{ display: { xs: 'block', md: 'inline-block' } }}
                        disablePortal
                        id="combo-box-demo"
                        freeSolo
                        value={query}
                        noOptionsText={"No products"}
                        // options={'fetching data'}   TODO!!!!!!!!!!
                        renderInput={params => (
                            <FieldStyled
                                required
                                {...params}
                                value={query}
                                id="filled-product"
                                label={"Enter product name"}
                                name="product"
                                variant="filled"
                            />
                        )}
                    />
                    <TextField
                        required
                        label={"Grams"}
                        id="filled-number"
                        name="grams"
                        type="number"
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
                            endAdornment: (
                                <InputAdornment position="end">g</InputAdornment>
                            ),
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
                        disabled={query && weigth && selectedProduct ? false : true}
                    >
                        Add
                    </ButtonStyled>
                </div>
                <FabStyled
                    ref={buttonEl}
                    aria-label="add"
                    type={isMobile ? 'button' : 'submit'}
                >
                    <AddIcon />
                </FabStyled>
            </FormStyled>
        </>
    );
}