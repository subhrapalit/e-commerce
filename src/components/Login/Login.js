import { Box, Dialog, DialogContent, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';

const useStyle = makeStyles({
    component: {
        height: 'auto',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },

})

const LoginDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(0),
    },

}));

const InitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const loginInitialValues = {
    username: '',
    password: ''
};
const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();

    const [account, toggleAccount] = useState(InitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(InitialValues.login)
    };
    const toggleUserAccount = () => {
        toggleAccount(InitialValues.signup)
    };
    const signupUser = async () => {
        let res = await authenticateSignup(signup);
        if (!res) return;
        handleClose();
        setAccount(signup.username)
    };

    const loginUser = async () => {
        let res = await authenticateLogin(login);
        if (!res) {
            setError(true);
            return
        }
        handleClose();
        setAccount(login.username);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    return (
        <LoginDialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component} >
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image} >
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography >{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                            <Box style={{
                                padding: '22px 32px', display: 'flex', flex: 1, flexDirection: 'column',
                            }}>
                                <TextField onChange={(e) => onValueChange(e)} style={{ marginTop: 10 }} name='username' label='Enter Email/Mobile number' variant="standard" />
                                <TextField onChange={(e) => onValueChange(e)} style={{ marginTop: 20 }} name='password' label='Enter Password' variant="standard" />
                                {
                                    error && <Alert severity="error">Invalid User Name or Password</Alert>
                                }
                                <Typography style={{ marginTop: 20, color: '#878787', fontSize: 12 }} className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button onClick={() => loginUser()} variant='contained' color="primary" style={{ textTransform: 'none', background: '#FB641B', color: '#fff', height: 48, borderRadius: 2, marginTop: 20 }}>Login</Button>
                                <Typography style={{ textAlign: 'center', marginTop: 20 }}>OR</Typography>
                                <Button variant='contained' color='primary' style={{
                                    textTransform: 'none', background: '#fff', color: '#2874f0', height: 48, borderRadius: 2, boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)', marginTop: 20
                                }}>Request OTP</Button>
                                <Typography onClick={() => toggleUserAccount()} style={{ margin: 'auto 0 5px 0', textAlign: 'center', color: '#2874f0', fontWeight: 600, fontSize: 14, cursor: 'pointer', marginTop: 25 }}>New to Flipkart? Create an account</Typography>
                            </Box> :

                            <Box style={{
                                padding: '6px 25px', display: 'flex', flex: 1, flexDirection: 'column',
                            }}>
                                <TextField onChange={(e) => onInputChange(e)} style={{ marginTop: 10 }} name='firstname' label='Enter First name' variant="standard" />

                                <TextField onChange={(e) => onInputChange(e)} style={{ marginTop: 20 }} name='lastname' label='Enter Lat name' variant="standard" />

                                <TextField onChange={(e) => onInputChange(e)} style={{ marginTop: 10 }} name='username' label='Enter Username' variant="standard" />

                                <TextField onChange={(e) => onInputChange(e)} style={{ marginTop: 20 }} name='email' label='Enter Email' variant="standard" />

                                <TextField onChange={(e) => onInputChange(e)} style={{ marginTop: 10 }} name='password' label='Enter Password' variant="standard" />

                                <TextField onChange={(e) => onInputChange(e)} style={{ marginTop: 20 }} name='phone' label='Enter Mobile Number' variant="standard" />



                                <Button onClick={() => signupUser()} variant='contained' color="primary" style={{ textTransform: 'none', background: '#FB641B', color: '#fff', height: 48, borderRadius: 2, marginTop: 20 }}>Sign Up</Button>




                            </Box>


                    }
                </Box>
            </DialogContent>
        </LoginDialog>
    );
};

export default Login;