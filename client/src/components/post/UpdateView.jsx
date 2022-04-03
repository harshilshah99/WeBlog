import {Box , makeStyles ,FormControl, InputBase , Button, TextareaAutosize} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import {useState , useEffect} from 'react';
import { getPost , updatePost , uploadFile } from '../../service/api';
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

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
    form:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px',
        fontFamily: 'Ubuntu, sans-serif',
    },
    textfield:{
        flex: 1,
        margin:'0 30px',
        fontSize: 22,
        fontFamily: 'Ubuntu, sans-serif',
    },
    textarea:{
        width:'100%',
        marginTop:40,
        border: 'none',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 17,
        '&:focus-visible':{
            outline: 'none',
        },
    }
}));

const initialValue = {
    title: '',
    description: '',
    picture:'',
    username: 'harshil',
    categories: 'All',
    createDate: new Date(),

}
const UpdateView=()=>{
   
    const [post , setPost] = useState(initialValue);
    const [file , setFile] = useState('');
    const [image , setImage] = useState('');
    const url = post.picture ? post.picture:'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';


    useEffect(()=>{
        const getImage = async()=>{
            if(file){
                const data = new FormData();
                data.append("name" , file.name);
                data.append("file" , file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }

        }
        getImage();
    },[file])
    const history= useNavigate();
    let {id} = useParams();
    useEffect(()=>{
        
        const fetchData = async()=>{
            
           let data = await getPost(id);
           console.log(data);
           setPost(data);
        }
        fetchData();
    },[])
    const handleChange = (e) =>{
        setPost({...post , [e.target.name]: e.target.value})
    }
    const updateBlog =async()=>{
        await updatePost(id , post);
        history(`/details/${id}`);

        
    }

    const classes = useStyles();
    return(
        <>
        <Box className={classes.container}>
            <img className={classes.img} src={url} alt="banner"/>
        

        <FormControl className={classes.form}>

        <label htmlFor='fileinput'>
        <AddCircle fontSize='large' color="action"/>
        </label>
        <input
            type="file"
            id="fileinput"
            style={{display: 'none'}}
            onChange={(e) => setFile(e.target.files[0])}
        />
        <InputBase placeholder='Title' value={post.title} onChange={(e) => handleChange(e)} name='title' className={classes.textfield}/>
        
        <Button onClick={()=> updateBlog()} variant="contained" color="primary">Update</Button>
        </FormControl>
        <TextareaAutosize
            rowsMin={5}
            placeholder="Tell your story..."
            className={classes.textarea}
            value={post.description}
            name='description'
            onChange={(e) => handleChange(e)} 
        />
        </Box>
        </>

    )
}
export default UpdateView;