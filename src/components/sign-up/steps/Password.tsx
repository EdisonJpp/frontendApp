import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Style from './style';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const GetPassword = () => {

    const [{ classes, showPassword }, desingActions] = Style();
    return (

        <div>

            <InputLabel className={classes.t} htmlFor="input-with-icon-adornment">Contraseña </InputLabel>
            <FilledInput
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={desingActions.handleClickShowPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                startAdornment={
                    <InputAdornment position="start">
                        <LockOutlinedIcon />
                    </InputAdornment>
                }
                className={classes.m}
            />

            <InputLabel className={classes.t} htmlFor="input-with-icon-adornment">Contraseña </InputLabel>
            <FilledInput
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
          
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={desingActions.handleClickShowPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                startAdornment={
                    <InputAdornment position="start">
                        <LockOutlinedIcon />
                    </InputAdornment>
                }
                className={classes.m}
            />

        </div>
    );
}

export default GetPassword;