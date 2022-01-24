import { Box } from '@mui/material';
import React from 'react';
import { ImageURL } from '../../constants/Data'

const MidSection = () => {
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Box style={{ display: 'flex', marginTop: 20, justifyContent: 'space-between' }}>
                {
                    ImageURL.map(image => (
                        <img src={image} alt="" style={{ width: "33%" }} />
                    ))
                }
            </Box>
            <img src={coronaURL} alt="" style={{ width: "100%", marginTop: 20, }} />
        </>

    );
};

export default MidSection;