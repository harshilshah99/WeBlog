import { makeStyles , Box ,Typography } from "@material-ui/core";
import { Edit , Delete ,VolumeUp } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useState , useEffect } from "react";
import {getPost , deletePost} from '../../service/api';
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { useSpeechSynthesis } from "react-speech-kit";

const useStyles = makeStyles((theme)=>({
    container: {
        marginTop: '64px',
        padding: 30,
        [theme.breakpoints.down('md')]:{
            padding:10,
        }

    },
    img:{
        height: '50vh',
        width:'100%',
        objectFit: 'cover',
    },
    icons:{
        float: 'right',
        
    },
    icon:{
        margin: 5,
        padding: 4,

    },
    heading:{
        fontSize:45,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',
        fontFamily: 'Ubuntu, sans-serif',
    },
    subheading:{
        color:'#878787',
        display: 'flex',
        fontFamily: 'Ubuntu, sans-serif',
        [theme.breakpoints.down('sm')]:{
            display: 'block',
        },
        margin: '20px 0px'
    },
    link:{
        textDecoration: 'none',
        color: 'inherit',
    },
    read:{
        marginTop: '1rem',
        fontFamily: 'Ubuntu, sans-serif',
    }


}));
const DetailView =()=>{
    const {speak} = useSpeechSynthesis();

    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
    const [post , setPost] = useState({});
    let {id} = useParams();
    const history= useNavigate();
    useEffect(()=>{
        
        const fetchData = async()=>{
            
           let data = await getPost(id);
           console.log(data);
           setPost(data);
        }
        fetchData();
    },[])
    const deleteBlog=async()=>{
        await deletePost(post._id);
        history('/')
    }
    return(
        <Box className={classes.container}>
            <img src={post.picture || url} alt="banner" className={classes.img}/>
        <Box className={classes.icons}>
        <VolumeUp onClick={()=> speak({text: post.description})}  className={classes.icon} color='primary'/>
        
            <Link to={ `/update/${post._id}`}>

            
            <Edit className={classes.icon} color='primary' /></Link>
            
            <Delete onClick={()=> deleteBlog()} className={classes.icon} color='error'/>
            
        </Box>
        <Typography className={classes.heading}>{post.title}</Typography>
        <Box className={classes.subheading}>
        <Link to ={`/?username=${post.username}`} className={classes.link} >
                <Typography>Author: <span style={{fontWeight: '700'}}>{post.username}</span></Typography>
        </Link>
        <Typography style={{marginLeft: 'auto' , fontFamily: 'Ubuntu, sans-serif'}}>{new Date(post.createDate).toDateString()}</Typography>
        </Box>
        <Typography style={{fontFamily: 'Ubuntu, sans-serif'}}>{post.description}</Typography>

       


        
        </Box>
    )
}
export default DetailView;