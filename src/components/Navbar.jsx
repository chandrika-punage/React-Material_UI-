import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from "react";

const Navbar = () => {

    const [open,setOpen]=useState(false)

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }))

    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))

    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }))


    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search> <InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }}
                        src="data:image/jpeg;base64,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"
                        onClick={e=>setOpen(true)}
                        />
                        
        
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }}
                        src="data:image/jpeg;base64,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"
                        />
                        
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar 