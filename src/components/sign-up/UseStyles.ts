import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export default function UseStyle() {

    function getSteps() {
        return ['Correo Electronico', 'Contraseña', 'Confirmar'];
    }

    const [activeStep, setActiveStep]  = React.useState(0);
    const steps : any  = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const useStyles : any  = makeStyles((theme: Theme) =>
        createStyles({
            backButton: {
                marginRight: theme.spacing(1),
            },
            bottom: {
                display : 'flex',
                justifyContent : 'flex-end',
                alignItems : 'flex-end',
                height : '135px'
            },
            instructions: {
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
                height : '100px',

            },
            login :{
                display : 'flex', 
                justifyContent : 'center',
            },
            signUpBody:{
                // opacity : 0.7,   
                // backgroundImage : "url('https://fashionunited.co/images/201911/2planeaAlibaba1.jpg')",
                backgroundSize : 'cover',
                height : '100vh',
           

            },
            middleSignUp:{
                border: '1px solid #333', 
                padding : '30px' , 
                backgroundColor : '#ffff ' , 
                zIndex : 999 , 
                position : 'absolute'
            }
        }),
    );

    const classes = useStyles();

    return [ { classes , steps , activeStep  }, { handleReset ,  handleBack, handleNext   }]
} 