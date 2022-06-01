import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import { Menu } from 'conponents/Menu/Menu'
import { CartHeader } from 'conponents/Cart/CartHeader'

export const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            FaKe shop
                        </Typography>
                        <Menu></Menu>
                        <CartHeader></CartHeader>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
