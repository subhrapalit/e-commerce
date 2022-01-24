import { styled } from '@mui/material/styles';
import { Badge, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';



const LoginButton = styled(Button)(({ theme }) => ({

    backgroundColor: grey[50],
    color: '#2874f0',
    '&:hover': {
        backgroundColor: grey[50],
    },

    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    // textDecoration: 'none'
}));

const HeaderButtons = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);
    const openLoginDialog = () => {
        setOpen(true);
    }

    const { cartItems } = useSelector(state => state.cart);
    return (

        <Stack sx={{ m: '0 15% 0 auto', display: 'flex', alignItems: 'center' }} spacing={5} direction="row" >
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <Link style={{ textDecoration: 'none' }}>
                        <LoginButton variant="contained" onClick={() => openLoginDialog()} >Log in</LoginButton>
                    </Link>
            }
            <Link style={{ textDecoration: 'none', color: '#ffffff' }}><Typography >More</Typography></Link>
            <Link to='/cart' style={{ textDecoration: 'none', color: '#ffffff', display: 'flex' }}>
                <Badge badgeContent={cartItems.length} color="error" >
                    <ShoppingCartIcon ml={5} />
                </Badge>
                <Typography sx={{ ml: '15%' }} >Cart</Typography>
            </Link>
            <Login open={open} setOpen={setOpen} setAccount={setAccount} />
        </Stack>


    );
};

export default HeaderButtons;