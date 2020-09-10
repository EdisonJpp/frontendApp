import React from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import OcptionInHeader from './Opctions';
import UseStyles from './UseStyle';

function ViewHeaderUser() {

    const [{ styles }] = UseStyles();

    return (
        <div className="popover__wrapper">
            {/* <span > */}
                <AccountCircleOutlinedIcon className={styles.root} />
            {/* </span> */}

            <div className="popover__content">
                <OcptionInHeader />
            </div>
        </div>
    );
}
export default ViewHeaderUser; 
