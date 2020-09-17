import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import ViewHeaderCart from "../../../components/shopping-cart/right-header-view/RightHeaderView";
import ViewHeaderUser from "../../../components/profile/profile-header-opctions/RightHeaderView";
import SaleButton from "../../../components/buttons/sale-button/SaleButton";
import CategoriesView from '../../../components/categories/category-options/CategoriesView';
import { UseStyle } from "./UseStyle";
import MobileOption from "../../../components/mobileSection/options/Index";


function HeaderView() {

    const [{ classes }] = UseStyle();

    return (
        <div className="header">
            <header className="header" style={{ backgroundColor: "#", borderBottom: " 1px solid #E6E7EB" }} >

                <Container className={classes.grow}>
                    <Toolbar className={classes.tolbar}>

                        <img width="170px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjZ4IMbuFDVYFsDLvbl2eab6r7_iSZK265RV14OUgflw&usqp=CAU&ec=45699843" alt="edison" />

                        <MobileOption count={7} />

                        <div className={classes.saleButtonMobil} >
                        <SaleButton />
                        </div>

                        <div className={classes.menuButton}>
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
                                    <ViewHeaderCart   count={7} />
                            </div>
                          
                            <div className="userOpcion">
                                <ViewHeaderUser />
                            </div>

                            <SaleButton  />
                            <SaleButton />
                        </div>

                    </Toolbar>
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
