import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UseStyle from "./UseStyle";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ViewHeaderUser from "../../profile/profile-header-opctions/RightHeaderView";
import SaleButton from "../../buttons/sale-button/SaleButton";
import ViewHeaderCart from "../../shopping-cart/right-header-view/RightHeaderView";
import Grid from "@material-ui/core/Grid";
import SportsFootballOutlinedIcon from '@material-ui/icons/SportsFootballOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import Collapse from '@material-ui/core/Collapse/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

type Anchor = 'left';
export default function Options( { count} : any ) {

  const [{ desing, state, open, toggleDrawer }, actions] = UseStyle();

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Grid className={desing.flexGrid}>

          <ListItem button className={desing.flex} onClick={toggleDrawer(anchor, false)} >
            <ListItemIcon>  <ViewHeaderUser /> </ListItemIcon>
            <ListItemText primary={"Perfil"} />
          </ListItem>

          <ListItem button className={desing.flex} onClick={toggleDrawer(anchor, false)} >
            <ListItemIcon>  <ViewHeaderCart  count={7}/> </ListItemIcon>
            <ListItemText primary={"Carrito"} />
          </ListItem>

        </Grid>
        <div style={{ margin: "5px" }}>
          <SaleButton />
        </div>
      </List>
      <Divider />

      <List>

        {/*OPCIONES DE CATEGORIASSSSSSSSSSSS */}
        <ListItem button onClick={actions.handleClick}  >
          <ListItemIcon>  <MenuOpenOutlinedIcon /> </ListItemIcon>
          <ListItemText primary={"Categorias"} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button className={desing.nested}>
              <ListItemIcon>
                <SportsFootballOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Deportes" />
            </ListItem>

            <ListItem button className={desing.nested}>
              <ListItemIcon>
                <HomeWorkOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Casas y Apartamentos" />
            </ListItem>

          </List>
        </Collapse>

      </List>
    </div>
  );

  return (
    <div className={desing.viewOptions}>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}  > <MenuRoundedIcon /> </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
