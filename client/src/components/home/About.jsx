
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

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h4">WeBlog</Typography>
                <Typography variant="h6" className={classes.text}>The best ideas can change who we are. WeBlog is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/harshilshah99" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                
            </Box>
        </Box>
    )
}

export default About;