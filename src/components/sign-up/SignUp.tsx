import React from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UseStyle from './UseStyles';
import GetEmail from './steps/Email';
import GetPassword from './steps/Password';
import Grid from '@material-ui/core/Grid';



export default function SignUp() {

    const [{ classes, steps, activeStep }, desingActions] = UseStyle();

    const getStepContent: any = (stepIndex: any) => {
        switch (stepIndex) {
            case 0:
                return <GetEmail />
            case 1:
                return <GetPassword />;
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Unknown stepIndex';
        };
    }

    return (

        <div className={classes.signUpBody}>
            <div>
                <span> Inicia tu sesion</span>
            </div>
            
            <Grid className={classes.login}   >

                <div className={classes.middleSignUp}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label: string, index: number) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Grid style={{height : '300px'}}>

                        {activeStep === steps.length ? (
                            <div >
                                <Typography className={classes.instructions}>All steps completed</Typography>
                                <Button onClick={desingActions.handleReset}>Reset</Button>
                            </div>
                        ) : (
                                <div>

                                    <div className={classes.instructions}>
                                        {getStepContent(activeStep)}
                                    </div>

                                    <div className={classes.bottom}>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={desingActions.handleBack}
                                            className={classes.backButton}
                                        >
                                            atras
              </Button>
                                        <Button variant="contained" color="primary" onClick={desingActions.handleNext}>
                                            {activeStep === steps.length - 1 ? 'Crear' : 'Siguiente'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                    </Grid>
                </div>
            </Grid>
        </div>
    );
}
