import React from "react";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Content from './Content';
import UseStyles from './UseStyles';
import Badge from '@material-ui/core/Badge';


function ViewHeaderCart( {count  } : any ) {

  const [{ classes }] = UseStyles();

  return (
    <div className="popover__wrapper">
      <span >
      <Badge badgeContent={count} color="secondary">
        <ShoppingCartOutlinedIcon className={classes.root} />
      </Badge>
      </span>

      <div className="popover__content">
        <Content />
      </div>
    </div>
  );
}
export default ViewHeaderCart; 
