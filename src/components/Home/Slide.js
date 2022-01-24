import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
// import { products } from '../../constants/Data';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Slide = ({ timer, title, products }) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <span style={{ color: '#7f7f7f', marginLeft: 10, display: 'flex', alignItems: 'center' }}>{hours} : {minutes} : {seconds} Left</span>;
    };
    return (
        <Box style={{ marginTop: 12, background: '#FFFFFF' }}>
            <Box style={{ display: 'flex', padding: '15px 20px' }}>
                <Typography style={{ fontSize: 22, fontWeight: 600, lineHeight: '32px', marginRight: 25 }}>{title}</Typography>


                {timer &&
                    <Box style={{ color: '#7f7f7f', marginLeft: 10, display: 'flex', alignItems: 'center' }}>

                        <img src={timerURL} alt="" style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />

                    </Box>
                }

                <Button variant="contained" color="primary" style={{ marginLeft: 'auto', backgroundColor: '#2874f0', borderRadius: 2, fontSize: 13 }}>View All</Button>



            </Box>
            <Divider />
            <Carousel swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                indicators={false}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={['desktop', "tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">


                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Box textAlign="center" style={{ padding: '35px 15px' }}>
                                <img src={product.url} alt="" style={{ width: 'auto', height: 150 }} />

                                <Typography style={{ fontSize: 14, marginTop: 5, fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                                <Typography style={{ fontSize: 14, marginTop: 5, color: 'green' }}>{product.discount}</Typography>
                                <Typography style={{ fontSize: 14, marginTop: 5, color: '#212121', opacity: '.6' }}>{product.tagline}</Typography>

                            </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Box>
    );
};

export default Slide;