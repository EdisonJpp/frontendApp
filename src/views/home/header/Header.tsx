import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import ViewHeaderCart from "../../../componets/shopping-cart/RightHeaderView";
import ViewHeaderUser from "../../../componets/profile/profile-header-opctions/RightHeaderView";
import SaleButton from "../../../componets/buttons/sale-button/SaleButton";
import { UseStyle } from "./UseStyle";

function HeaderView() {

    const [{ classes, anchorEl, isMenuOpen, isMobileMenuOpen, mobileMoreAnchorEl }, actions] = UseStyle();

    const menuId = 'primary-search-account-menu';

    /// Screen Movile
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen || false}
            onClose={actions.handleMenuClose}
        >
            <MenuItem onClick={actions.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={actions.handleMenuClose}>My account</MenuItem>
        </Menu>

    );

    /// Render Screen Movile
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen || false}
            onClose={actions.handleMobileMenuClose}
        >
            <MenuItem className={classes.menuItemMovil}>
                <div className="cart" style={{ alignSelf: "center" }}>
                    <Badge badgeContent={7} color="secondary">
                        <ViewHeaderCart />
                    </Badge>
                </div>

                <IconButton
                    edge="end"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={actions.handleProfileMenuOpen}
                    color="inherit"
                >
                    <ViewHeaderUser />
                </IconButton>

                <SaleButton />

                {/* <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={actions.handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p> */}
            </MenuItem>
        </Menu>
    );

    return (
        <div className="header">
            <header className="header" style={{ backgroundColor: "#" , borderBottom : " 1px solid #3333" , border : "1 px solid #3333" }} >

                <Container className={classes.grow}>
                    <Toolbar>
                        {/* <img src={Logo} alt="logo " width=" 100px" /> */}
                        <Typography className={classes.title} variant="h6" noWrap>
                            Edison's store

  </Typography>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >



                            <MenuIcon />
                        </IconButton>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>



                            <div className="cart" style={{ alignSelf: "center" }}>
                                <Badge badgeContent={7} color="secondary">
                                    <ViewHeaderCart />
                                </Badge>
                            </div>

                            <IconButton
                                edge="end"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={actions.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <ViewHeaderUser />
                            </IconButton>

                            <SaleButton />
                            <SaleButton />

                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={actions.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                    {renderMobileMenu}
                    {renderMenu}
                </Container>

            </header>
        </div>
    );
};

export default HeaderView; 