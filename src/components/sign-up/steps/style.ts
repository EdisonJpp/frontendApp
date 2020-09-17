import React from 'react';
import { makeStyles,createStyles ,Theme } from '@material-ui/core/styles';

const styles : any  = makeStyles((theme: Theme) => (
    createStyles({
        m: {
            margin: theme.spacing(1),
            width: '100%'
        },
        t:{
            marginTop : theme.spacing(2)
        },
        emailInput: {
            width: '100%',
        }
    })
));

export default function Style (){

    const [showPassword, setValues] = React.useState(false);

    const handleClickShowPassword = () => {
        setValues(!showPassword );
      };

    const classes   = styles();

    return [{classes , showPassword} , { handleClickShowPassword}]; 
}