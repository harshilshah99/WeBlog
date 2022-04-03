import {AppBar , Toolbar , Typography , makeStyles, withTheme , Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const useStyles = makeStyles({

    container: {
        justifyContent: 'center',
        '& > *':{
            padding: 20
        }

    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    }
});

const Header = ()=>{
    const history= useNavigate();
    const classes = useStyles();

    

    return (
        <AppBar>
            <Toolbar className={classes.container}>
                <Link to='./' className={classes.link}>
                <Typography>HOME</Typography>
                </Link>
                <Link to='./about' className={classes.link}>
                <Typography>ABOUT</Typography>
                </Link>
                <Link to='./contact' className={classes.link}>
                <Typography>CONTACT</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;