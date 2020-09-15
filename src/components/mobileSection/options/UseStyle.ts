import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

type Anchor = 'left';

export default function UseStyles() {
  const [open, setOpen] = React.useState(true);
  
  const [state, setState]: any = React.useState({
    left: false,
  });

  const toggleDrawer: any = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = () => {
    setOpen(!open);
  };


  const Styles: any = makeStyles((theme: Theme) =>
  createStyles({
    viewOptions: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    flex: {
      display: "flex",
    },
    flexGrid: {
      display: "flex",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

  const desing = Styles();

  return [{ state, desing, open, toggleDrawer }, { handleClick }];
}