import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import Opctions from './Options';


export default function CategoriesView() {

  return (


    <div className="popover__wrapper">
      <span >
        <MenuIcon />
      </span>

      <div className="popover__content">
        <Opctions />
      </div>
    </div>
  );
}
