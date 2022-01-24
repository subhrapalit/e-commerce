import { Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from 'react-router-dom';

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen();
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const logout = () => {
        setAccount('');
    }
    return (
        <>
            <Link style={{ textDecoration: 'none', color: '#ffffff' }}><Typography onClick={handleClick}>{account}</Typography></Link>
            <Menu
                anchorEl={open}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                style={{ marginTop: 40 }}
            >
                <MenuItem onClick={() => { handleClose(); logout(); }}><PowerSettingsNewIcon fontSize='small' color='primary' /> <Typography style={{ fontSize: 14, marginLeft: 10 }}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default Profile;