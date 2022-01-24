import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const EmptyCart = () => {
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    const history = useHistory();

    const addItem = () => {
        history.push('/');


    }
    return (
        <Box style={{ width: '80%%', height: '65vh', background: '#fff', margin: '80px 140px' }}>
            <Box style={{ textAlign: 'center', paddingTop: 70 }}>
                <img src={emptycarturl} alt="" style={{ width: '30%' }} />
                <Typography style={{ fontSize: 18, fontWeight: 600 }}>Your cart is empty!</Typography>
                <Typography style={{ fontSize: 16, fontWeight: 300 }}>Add items to it now.</Typography>
                <Button variant='contained' onClick={() => addItem()}>Shop Now!</Button>
            </Box>

        </Box>
    );
};

export default EmptyCart;