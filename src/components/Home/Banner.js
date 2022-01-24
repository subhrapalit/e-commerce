import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constants/Data';

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            animation="fade"
            indicators={false}
            navButtonsAlwaysVisible={false}
            cycleNavigation={true}

            StylesProvider
            navButtonsProps={{
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={image} alt="" style={{ width: '100%', height: 280 }} />
                ))
            }
        </Carousel>
    );
};

export default Banner;