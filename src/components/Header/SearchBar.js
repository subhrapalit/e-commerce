import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../Redux/Actions/productAction'
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({

    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '38%',
    display: 'flex',
    color: 'black',

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: 5,
    height: '100%',
    display: 'flex',
    color: 'blue',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    fontSize: 'unset',
    width: '100%',
    '& .MuiInputBase-input': {
        paddingLeft: 20,

    },
}));


const SearchBar = () => {

    const [text, setText] = useState();
    const [open, setOpen] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <Search>

            <StyledInputBase
                placeholder="Search for products, brands & more..."
                inputProps={{ 'aria-label': 'search' }}

                onChange={(e) => getText(e.target.value)}
            />
            <SearchIconWrapper>
                <SearchIcon />
                {
                    text &&
                    <List style={{ position: 'absolute', color: '#000', background: '#FFFFFF', marginTop: 36 }} hidden={open}>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link
                                        to={`/product/${product.id}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={() => setOpen(true)}
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </List>
                }
            </SearchIconWrapper>
        </Search>
    );
};

export default SearchBar;