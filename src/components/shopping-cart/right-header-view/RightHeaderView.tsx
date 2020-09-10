import React from "react";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Content from './Content';
import UseStyles from './UseStyles';

function ViewHeaderCart() {

  const [{ classes }] = UseStyles();

  return (
    <div className="popover__wrapper">
      <span >
        <ShoppingCartOutlinedIcon className={classes.root} />
      </span>

      <div className="popover__content">
        <Content />
      </div>
    </div>
  );
}
export default ViewHeaderCart; 
