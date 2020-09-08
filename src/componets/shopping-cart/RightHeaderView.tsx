import React from "react" ; 
// import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import { makeStyles, Theme  ,createStyles} from '@material-ui/core/styles';


function ViewHeaderCart (){
    
    const style = makeStyles((theme : Theme)=>
        createStyles({
            root :{
                fontSize : "30px",  
                // color : '#bdbdbd' 757575
                color : '#757575' 
                // color : '#9e9e9e' ,
                
            },
        })
    ); 
    const styles =  style() ; 


    return(

        <div>
            <ShoppingCartOutlinedIcon className={styles.root}  />
        </div>
    );
}
export default ViewHeaderCart ; 
