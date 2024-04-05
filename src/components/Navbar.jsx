import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AvatarImg from '../assets/avatar.jpeg'

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const pages = ['طلباتي', 'مستنداتي', 'الدعم الفني'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const services = ['خدمة 1', 'خدمة 2', 'خدمة 3', 'خدمة 4', 'خدمة 5'];

function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElServices, setAnchorElServices] = React.useState(null);
    const [searchBar, setSearchBar] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleOpenServicesMenu = (event) => {
        setAnchorElServices(event.currentTarget);
    };

    const handleCloseServicesMenu = () => {
        setAnchorElServices(null);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" dir="rtl" sx={{ borderBottom: "1px solid #918278", boxShadow: "none" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: "flex" }}>
                    <img src={props.logo} alt="logo" width={136} height={32} />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "end" }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="common"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem dir='rtl'>
                                <Tooltip title="Open settings" onClick={handleOpenUserMenu}>
                                    {/* <IconButton sx={{ p: 1 }}>
                                        <Avatar alt="Remy Sharp" src={AvatarImg} sx={{ border: "2px solid #fff" }} />
                                    </IconButton> */}
                                    <Typography sx={{ cursor: 'pointer' }} variant='p' fontSize={'14px'} color='text.primary'>أهلًا، عمر  عبد الله</Typography>
                                </Tooltip>
                            </MenuItem>
                            <MenuItem dir='rtl' onClick={handleOpenServicesMenu}>
                                <Typography textAlign="center">الخدمات</Typography>
                            </MenuItem>
                            {pages.map((page) => (
                                <MenuItem dir='rtl' key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* PC Version */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button onClick={handleOpenServicesMenu} sx={{ my: 2, mr: 2, color: 'text.primary', display: 'flex', gap: 1, justifyContent: "center" }} endIcon={<ExpandMoreIcon />}>الخدمات</Button>

                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, mx: 1, color: 'text.primary', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: "none", sm: "flex" } }}>
                        <Tooltip title="Open settings" onClick={handleOpenUserMenu}>
                            <IconButton sx={{ p: 1 }}>
                                <Avatar alt="Remy Sharp" src={AvatarImg} sx={{ border: "2px solid #fff" }} />
                            </IconButton>
                            <Typography sx={{ cursor: 'pointer' }} variant='p' fontSize={'14px'} color='text.primary'>أهلًا، عمر  عبد الله</Typography>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElServices}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElServices)}
                            onClose={handleCloseServicesMenu}
                        >
                            {services.map((service) => (
                                <MenuItem key={service} onClick={handleCloseServicesMenu}>
                                    <Typography textAlign="center">{service}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <KeyboardArrowDownOutlinedIcon color="common" sx={{ marginX: 1, cursor: "pointer", display: { xs: "none", sm: "flex" } }} />
                    <NotificationsNoneOutlinedIcon color="common" sx={{ marginX: 3, cursor: "pointer", display: { xs: "none", sm: "flex" } }} />
                    <Box component="label">
                       
                        {
                            searchBar ? <input type='search' onBlur={() => setSearchBar(false)} style={{ backgroundColor: "transparent", padding: "8px"}}  /> : <SearchOutlinedIcon color="common" sx={{ marginX: 1, cursor: "pointer", display: { xs: "none", sm: "flex" } }} onClick={() => setSearchBar(true)} />
                        }
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;