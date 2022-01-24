import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import GroupButton from './GroupButton';

const CartItem = ({ item, removeItemFromCart }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    return (
        <Card style={{ borderTop: '1px solid #f0f0f0', borderRadius: 0, display: 'flex' }}>
            <Box style={{ margin: 20, display: 'flex', flexDirection: 'column' }}>
                <img src={item.url} alt="" style={{ height: 110, width: 110 }} />
                <GroupButton />

            </Box>
            <Box style={{ margin: 20 }}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography style={{ color: '#878787', fontSize: 14, marginTop: 10 }}>Seller:RetailNet
                    <span><img src={fassured} alt="" style={{ width: 50, marginLeft: 10 }} /></span>
                </Typography>
                <Typography style={{ margin: '20px 0' }}>
                    <span style={{ fontSize: 18, fontWeight: 600 }}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#878787' }} ><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{item.price.discount} off</span>
                </Typography>
                <Button style={{ marginTop: -5, textTransform: 'none', fontSize: 16 }} onClick={() => removeItemFromCart(item.id)}>Remove Item</Button>

            </Box>

        </Card>
    );
};

export default CartItem;