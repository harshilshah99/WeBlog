import { makeStyles , Box ,Typography } from "@material-ui/core";

const useStyles = makeStyles({
    image:{

        background: `url(${'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}) center/100% no-repeat #000`,
  
       
        
        width: '100%',
        
        height: '50vh',
        marginTop: 64,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        '& :first-child': {
            fontSize: '70px',
            color: 'white',
        },
    }
})

const Banner = ()=>{
    const classes = useStyles();
    return(
        <Box className={classes.image}>
           <Typography style={{color: '#3f51b5'}}>WeBlog</Typography>
        </Box>
        
    )

}

export default Banner;