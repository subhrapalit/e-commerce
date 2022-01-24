import { Box, Typography } from '@mui/material';
import { navData } from '../../constants/Data';
import React from 'react';

const Navbar = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', m: '55px 130px 0 130px', justifyContent: 'space-between', overflowX: 'overlay', }}>
            {
                navData.map(data => (
                    <Box sx={{ p: '12px 8px', textAlign: 'center' }}>
                        <img style={{ width: '74px' }} src={data.url} alt="" sx={{ display: 'flex', }} />
                        <Typography sx={{ fontSize: 14, fontWeight: 600, fontFamily: 'inherit' }} >{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    );
};

export default Navbar;