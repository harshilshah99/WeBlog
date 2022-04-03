import {Box ,makeStyles,Typography} from '@material-ui/core';

const useStyles = makeStyles({
    container:{
        height: 300,
        width: '85%',
        padding: 10,
        margin: 10,
        border: '1px solid #d3cede',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'white',

    },
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
    },
    text:{
        fontSize: 13,
        padding: '2px',
       fontFamily: 'Ubuntu, sans-serif',
       color: 'gray',
        // fontFamily: 'Lato, sans-serif',
        
        
    },
    desc:{
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 14,
        paddingTop: '5px',
        fontWeight: '500',
        color: '#141414',

    },
    heading: {
        fontSize: 16,
        fontWeight: '900',
        wordBreak: 'break-word',
        fontFamily: 'Ubuntu, sans-serif',
        textAlign:'center',
        color: '#3f51b5',
        padding: 5,

        
    }
})
const Post = ({post})=>{
    const classes = useStyles();
    const url =post.picture || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + ' ...' : str;
    }

    return(
        <>
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="blog" />
            <Typography className={classes.text}>{post.categories}</Typography>
            <Typography className={classes.heading}>{addEllipsis(post.title, 20)}</Typography>
            <Typography className={classes.text}>Author: {post.username}</Typography>
            <Typography className={classes.desc}>{addEllipsis(post.description, 100)}</Typography>
        </Box>
        </>
    )
}

export default Post;