import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export function UseStyle() {

    const useStyles: any = makeStyles((theme: Theme) =>
        createStyles({
            grow: {
                flexGrow: 1,
            },
            menuButton: {
                marginLeft: theme.spacing(2),
                [theme.breakpoints.down('md')]: {
                    display: "none",    
                }
            },
            title: {
                // display: 'none',
                [theme.breakpoints.up('sm')]: {
                    display: 'block',
                    alignSelf : 'center'
                },
            },
            search: {
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: fade(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: fade(theme.palette.common.white, 0.25),
                },
                // marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(3),
                    width: 'auto',
                },
            },
            searchIcon: {
                padding: theme.spacing(0, 2),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            inputRoot: {
                color: 'inherit',
            },
            inputInput: {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                border: "1px solid #3333",
                width: '100%',
                [theme.breakpoints.up('md')]: {
                    width: '50ch',
                    border: "1px solid #3333",
                    borderRadius: " 5% ",
                },
            },
            sectionDesktop: {
                display: 'none',
                [theme.breakpoints.up('md')]: {
                    display: 'flex',
                    justifyContent: 'space-between ',
                    width: "30%"
                },
            },
            sectionMobile: {
                // display: 'flex',
                // width : '100%',
                // flexDirection: 'column',
                [theme.breakpoints.up('md')]: {
                    display: 'none',
                }
            },
            menuItemMovil :{
                display : 'flex',
                width : '260px',
                justifyContent: 'space-between'
                // flexDirection : 'column',
                // marginTop : '5px',
                // marginBottom :  '5px',
            },
            tolbar : {
                // borderBottom : "1px solid #3333",
            }
        }),
    );

    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };



    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    return [
        {
            mobileMoreAnchorEl,
            isMobileMenuOpen,
            classes
        },
        {
            handleMobileMenuClose,
            handleMobileMenuOpen,
            setMobileMoreAnchorEl,
        }];
} 