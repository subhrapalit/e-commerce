import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useSelector } from 'react-redux';
import { getProductDetails } from '../../Redux/Actions/productAction';
import { styled } from '@mui/material/styles';
import ActionItems from './ActionItems';


const DetailView = ({ match }) => {

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const { product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch])
    return (
        <Box style={{ marginTop: 55, background: '#F2F2F2' }}>
            {
                product && Object.keys(product).length &&
                <Box style={{ background: '#FFFFFF', margin: '0 80px', display: 'flex', }}>
                    <Box style={{ minWidth: '40%' }}>
                        <ActionItems product={product} />
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 50 }}>{product.title.longTitle}</Typography>
                        <Typography style={{ marginTop: 5, fontSize: 14, color: '#878787' }}>8 Ratings & 1 Review
                            <span><img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available Offers</Typography>
                        <Box style={{ marginTop: 10 }}>
                            <Typography style={{ fontSize: 14 }}><LocalOfferIcon style={{ marginRight: 10, color: '#00CC00', fontSize: 16 }} />Special Price Extra ₹345 off(price inclusive of discount)T&C</Typography>

                            <Typography style={{ fontSize: 14 }}><LocalOfferIcon style={{ marginRight: '10', width: '18', height: '18', color: '#388E3C' }} />Bank Offer 10% off on ICICI Bank Credit Cards, up to ₹1250. On orders of ₹5000 and aboveT&C</Typography>

                            <Typography style={{ fontSize: 14 }}><LocalOfferIcon style={{ marginRight: '10', width: '18', height: '18', color: '#388E3C' }} />Bank Offer 10% off on ICICI Bank Debit Cards, up to ₹250. On orders of ₹2500 and aboveT&C</Typography>

                            <Typography style={{ fontSize: 14 }}><LocalOfferIcon style={{ marginRight: '10', width: '18', height: '18', color: '#388E3C' }} />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow style={{ fontSize: 14, verticalAlign: 'baseline', }}>
                                    <TableCell style={{ fontSize: 14, marginTop: 10, color: '#878787' }}>Delivery</TableCell>
                                    <TableCell style={{ fontSize: 14, marginTop: 10, fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                                </TableRow>
                                <TableRow style={{ fontSize: 14, verticalAlign: 'baseline', }}>
                                    <TableCell style={{ fontSize: 14, marginTop: 10, color: '#878787' }}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow style={{ fontSize: 14, verticalAlign: 'baseline', }}>
                                    <TableCell style={{ fontSize: 14, marginTop: 10, color: '#878787' }}>Seller</TableCell>
                                    <TableCell style={{ fontSize: 14, verticalAlign: 'baseline', }}>
                                        <span style={{ fontSize: 14, marginTop: 10, color: '#2874f0' }}>SuperComNet</span>
                                        <Typography style={{ fontSize: 14, verticalAlign: 'baseline', }}>GST invoice available</Typography>
                                        <Typography style={{ fontSize: 14, verticalAlign: 'baseline', }}>View more sellers starting from ₹329</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <img src={sellerURL} alt='' style={{ width: 390 }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow style={{ fontSize: 14, verticalAlign: 'baseline', }}>
                                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>

                    </Box>

                </Box>
            }
        </Box>
    );
};

export default DetailView;