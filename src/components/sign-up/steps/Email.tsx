import React from 'react';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import Style from './style';

const GetEmail = () => {

    const [{ classes }] = Style();

    return (

        <div>
            <InputLabel htmlFor="input-with-icon-adornment">Correo Electronico!</InputLabel>
            <FilledInput
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <MailOutlineOutlinedIcon />
                    </InputAdornment>
                }
                type='email'
                className={classes.emailInput}
            />
        </div>
    );
}

export default GetEmail;