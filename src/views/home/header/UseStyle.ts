import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export function UseStyle() {

    const useStyles: any = makeStyles((theme: Theme) =>
        createStyles({
            grow: {
                flexGrow: 1,
            },
            menuButton: {
                // marginLeft: theme.spacing(2),
                alignSelf: "center",
                [theme.breakpoints.down('sm')]: {
                    display: "none",
                }
            },
            title: {
                // display: 'none',
                [theme.breakpoints.up('sm')]: {
                    // display: 'block',
                    alignSelf: 'center'

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
                display: "flex",
                [theme.breakpoints.up('sm')]: {
                    marginLeft: theme.spacing(3),
                    width: '50%',
                },
            },
            saleButtonMobil:{
                // display : " flex",
                [theme.breakpoints.up("sm")]: {
                    display : "none" , 
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
                width : "100%"
            },
            inputInput: {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
                transition: theme.transitions.create('width'),
                border: "1px solid #3333",
                // width: '100%',
                [theme.breakpoints.up('md')]: {
                    width: '50ch',
                    border: "1px solid #3333",
                    borderRadius: "5%",
                    // width: '100%',
                },
            },
            sectionDesktop: {
                display: 'none',
                [theme.breakpoints.up('sm')]: {
                    display: 'flex',
                    justifyContent: 'space-between ',
                    width: "100%",
                    alignItems: "center",
                },
                [theme.breakpoints.up("md")]:{
                    display: 'flex',
                    justifyContent: 'space-between ',
                    width: "30%",
                    alignItems: "center",

                }
            },
            tolbar: {
                // borderBottom : "1px solid #3333",
                paddingRight: "0% ",
                paddingLeft: "0%",
                display: "flex",
                flexFlow: "wrap "
        }
        }),
    );

const classes = useStyles();







return [{ classes }];
} 