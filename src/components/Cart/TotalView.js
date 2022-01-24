import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    });

    const totalAmount = () => {
        let price = 0, discount = 0;
        console.log(cartItems);
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost)
        })
        setPrice(price);
        setDiscount(discount);
    }
    return (
        <Box style={{ width: '30%' }}>
            <Box style={{ padding: '15px 24px', background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
                <Typography style={{ color: '#878787' }}>Price Details</Typography>
            </Box>

            <Box style={{ padding: '15px 24px', background: '#fff' }}>
                <Typography style={{ marginBottom: 20, fontSize: 14 }}>Price ({cartItems.length} item) <span style={{ float: 'right' }}>₹{price} </span></Typography>
                <Typography style={{ marginBottom: 20, fontSize: 14 }}>Discount <span style={{ float: 'right' }}>₹{discount}</span></Typography>
                <Typography style={{ marginBottom: 20, fontSize: 14 }}>Delivery Charge <span style={{ float: 'right' }}>₹40</span></Typography>
                <Typography style={{ marginBottom: 20, fontSize: 18, fontWeight: 600, borderTop: '1px dashed #e0e0e0', padding: '20px 0', borderBottom: '1px dashed #e0e0e0' }}>Total Amount <span style={{ float: 'right' }}>₹{price - discount + 40}</span></Typography>
                <Typography style={{ marginBottom: 20, fontSize: 16, color: 'green' }}>You will save <span style={{ float: 'right' }}>₹{discount - 40}</span></Typography>

            </Box>

        </Box >
    );
};

export default TotalView;