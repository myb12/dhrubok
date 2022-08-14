import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Topbar from '../Topbar/Topbar';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const drawerWidth = 240;

function Sidebar(props) {
    const navigate = useNavigate();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HomeIcon />
                    <Link to="/" style={{ textDecoration: 'none', color: '#000', marginLeft: '6px' }}>
                        Home
                    </Link>
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {['counter', 'form', 'list'].map((text, index) => (
                    <ListItem key={index} disablePadding onClick={() => navigate(text)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {text === 'counter' && <DataSaverOnIcon />}
                                {text === 'form' && <ListAltIcon />}
                                {text === 'list' && <BackupTableIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.charAt(0).toUpperCase() + text.slice(1)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Topbar />
            </AppBar>

            <IconButton
                onClick={handleDrawerToggle}
                size="large"
                aria-label="open drawer"
                sx={{
                    mt: 7,
                    display: { sm: 'none' },
                    position: 'fixed',
                    backgroundColor: '#fff'
                }}>
                <MenuOpenIcon fontSize="large" />
            </IconButton>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* content goes here */}
            </Box>
        </Box>
    );
}

export default Sidebar;
