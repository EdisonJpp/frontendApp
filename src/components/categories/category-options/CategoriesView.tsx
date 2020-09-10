import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Opctions from './Options';


export default function CategoriesView() {

  return (


    <div className="popover__wrapper" >
      <span style={{marginLeft : "15px"}} >
        <MenuIcon  />
      </span>

      <div className="popover__content">
        <Opctions />
      </div>
    </div>
  );
}
