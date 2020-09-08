import React from "react" ; 
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { makeStyles, Theme  ,createStyles} from '@material-ui/core/styles';



function ViewHeaderUser (){



    const style = makeStyles((theme : Theme)=>
    createStyles({
        root :{
            fontSize : "35px",  
            color : '#757575',
        },
    })
    ); 
    const styles = style();

    
    return(

        <div className="user-Icon">
            <AccountCircleOutlinedIcon className={styles.root}  />
        </div>
    );
}
export default ViewHeaderUser; 
