import { Box, Button } from '@mui/material';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartAction';
import { useHistory } from 'react-router-dom';

const ActionItems = ({ product }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const addItemToCart = () => {
        dispatch(addToCart(product.id));
        history.push('/cart');
    }
    return (
        <Box style={{ minWidth: '40%', textAlign: 'center', padding: '40px 0 0 80px', }}>
            <img src={product.detailUrl} alt="" style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '95%' }} /> <br />
            <Button onClick={() => addItemToCart()} style={{ marginRight: 10, width: '46%', borderRadius: 2, height: 50, background: '#ff9f00', color: '#FFF' }}><ShoppingCartIcon />Add to Cart</Button>
            <Button style={{ width: '46%', borderRadius: 2, height: 50, background: '#fb641b', color: '#FFF' }}><FlashOnIcon /> Buy Now</Button>

        </Box>
    );
};

export default ActionItems;