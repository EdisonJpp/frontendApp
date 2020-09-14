import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import ViewHeaderCart from "../../../components/shopping-cart/right-header-view/RightHeaderView";
import ViewHeaderUser from "../../../components/profile/profile-header-opctions/RightHeaderView";
import SaleButton from "../../../components/buttons/sale-button/SaleButton";
import CategoriesView from '../../../components/categories/category-options/CategoriesView';
import { UseStyle } from "./UseStyle";

function HeaderView() {

    const [{ classes, isMobileMenuOpen, mobileMoreAnchorEl }, desingActions] = UseStyle();

    const menuId = 'primary-search-account-menu';


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
            onClose={desingActions.handleMobileMenuClose}
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
                    color="inherit"
                >
                    <div>
                        <ViewHeaderUser />
                    </div>
                </IconButton>
                <SaleButton />
            </MenuItem>
        </Menu>
    );

    return (
        <div className="header">
            <header className="header" style={{ backgroundColor: "#", borderBottom: " 1px solid #E6E7EB" }} >

                <Container className={classes.grow}>
                    <Toolbar className={classes.tolbar}>

                        <Typography className={classes.title} variant="h6" noWrap>
                            Edison's store

  </Typography>

                        <div className="categoryOpcion">
                            <CategoriesView />
                        </div>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Que estas buscando? "
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>

                            <div className="cart" >
                                <Badge badgeContent={7} color="secondary">
                                    <ViewHeaderCart />
                                </Badge>
                            </div>  


                            <div className="userOpcion">
                                <ViewHeaderUser />
                            </div>

                            <SaleButton />
                            <SaleButton />

                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={desingActions.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>

                    {renderMobileMenu}

                </Container>

            </header>
            {/* <div className={ "headerBottom"}  style={{borderBottom : "1px solid #E6E7EB"}}>
                    <Container>
                        <Grid xs={10}   >
                            <span style={{marginLeft : "20px"}}> <strong>categorias   | </strong></span>
                        
                        </Grid>
                        </Container>

                </div> */}
        </div>
    );
};

export default HeaderView; 
