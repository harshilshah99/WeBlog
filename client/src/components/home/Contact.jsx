import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub} from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 10,
        '& > *': {
            marginTop: 40
        }
    },
    text: {
        color: 'black'
    }
})


const Contact = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}>Helloo</Box>
            <Box className={classes.wrapper}>
                <Typography variant="h4">Getting in touch is easy! </Typography>    
                <Typography variant="h6" className={classes.text}>
                    Reach out to me on 
                    <Link href="https://github.com/harshilshah99"  color="inherit" target="_blank">
                        <GitHub style={{paddingLeft: '1rem'}}/>
                    </Link>
                   
                </Typography>
            </Box>
        </Box>
    );
}

export default Contact;