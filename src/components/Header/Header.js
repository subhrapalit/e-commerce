import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButtons from './HeaderButtons';
import SearchBar from './SearchBar';

const useStyles = makeStyles({
    header: {
        background: '#2874f0',
        height: 55,

    },
    logo: {
        width: 75,
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10,
        paddingRight: 15,
    },
    container: {
        display: 'flex',
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#ffffff'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic',
    },

})

const ToolBar = withStyles({
    root: {
        minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <div>
            <AppBar className={classes.header}>
                <ToolBar>
                    <Link to='/' className={classes.component}>
                        <img className={classes.logo} src={logoURL} alt="" />
                        <Box className={classes.container}>
                            <Typography className={classes.subHeading}>Explore <Box component="span" style={{ color: '#FFE500' }}>Plus</Box></Typography>
                            <img className={classes.subURL} src={subURL} alt="" />

                        </Box>
                    </Link>
                    <SearchBar />
                    <HeaderButtons />
                </ToolBar>
            </AppBar >

        </div >
    );
};

export default Header;
