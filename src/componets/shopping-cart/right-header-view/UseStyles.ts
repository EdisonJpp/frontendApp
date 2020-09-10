import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default function UseStyles() {

  const style : any  = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        fontSize: "30px",
        // color : '#bdbdbd' 757575
        color: "#757575",
        // color : '#9e9e9e' ,
        cursor: "pointer"

      },
    })
  );

  const classes = style(); 

  return [{ classes }] ; 

}