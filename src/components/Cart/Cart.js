import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { removeFromCart } from '../../Redux/Actions/CartAction';
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();
    useEffect(() => {
        console.log(cartItems);
    })
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }
    return (
        <>
            {
                cartItems.length ?
                    <Box style={{ marginTop: 55, padding: '30px 135px', display: 'flex', }}>
                        <Box style={{ width: '67%', paddingRight: 15, }}>
                            <Box style={{ padding: '15px 24px', background: '#fff' }}>
                                <Typography style={{ fontWeight: 600, fontSize: 18 }}>My Cart ({cartItems?.length})</Typography>
                            </Box>
                            {cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart} />
                            ))
                            }
                            <Box style={{
                                padding: '16px 22px', background: '#fff',
                                boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)', borderTop: '1px solid #f0f0f0'
                            }}>
                                <Button style={{ display: 'flex', marginLeft: 'auto', background: '#fb641b', color: '#fff', borderRadius: 2, width: 250, height: 51 }}>Place Order</Button>
                            </Box>
                        </Box>
                        <TotalView cartItems={cartItems} />
                    </Box>

                    : <EmptyCart />
            }

        </>
    );
};

export default Cart;