import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from "react";

function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
            <AppBar position="static" sx={{ height: "60px", backgroundColor:"#131314"}}>
                <Toolbar sx={{ display: "flex", justifyContent: "right" }}>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            sx={{ p: 0 }}
                            onClick={handleMenu}
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{
                                mt: '30px'
                            }}
                        >
                            <MenuItem >
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>
                            <MenuItem >
                                <Typography textAlign="center">My Account</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;