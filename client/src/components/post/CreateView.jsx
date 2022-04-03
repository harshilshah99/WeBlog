import {Box , makeStyles ,FormControl, InputBase , Button, TextareaAutosize} from '@material-ui/core';
import {AddCircle}from '@material-ui/icons';
import { MicOff , Mic , Refresh , FileCopy} from '@material-ui/icons';
import { useState , useEffect } from 'react';
import { createPost , uploadFile} from '../../service/api';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import {useNavigate} from 'react-router-dom';
import copy from "copy-to-clipboard";


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
        [theme.breakpoints.down('md')]:{
          objectFit: 'none',
          height: '30vh'
      }
    },
    form:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px'
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
        fontSize: 17,
        fontFamily: 'Ubuntu, sans-serif',
        '&:focus-visible':{
            outline: 'none',
        },

    },
    listenarea:{
        width:'95%',
        marginTop:20,
        border:'none',
        fontFamily: 'Ubuntu, sans-serif',
        fontSize: 17,
        '&:focus-visible':{
            outline: 'none',
        },

    },
    icon:{
      padding: '5px',
      fontSize: '1.6rem',
      cursor: 'pointer',
      color: 'white',

    },
    copy:{
      padding: '5px',
      fontSize: '1.6rem',
      cursor: 'pointer',
      marginTop: 45,
      marginLeft: 10,
    },
    author:{
      fontSize: '1rem',
      margin: '1rem',
      fontFamily: 'Ubuntu, sans-serif',

    },
    category:{
      fontSize: '1rem',
      margin: '1rem 1rem 3rem 1rem',
      border:'none',
      fontFamily: 'Ubuntu, sans-serif',
    }
}));


const initialValue = {
    title: '',
    description: '',
    picture:'',
    username: 'anonymous',
    categories: 'All',
    createDate: new Date(),

}

const CreateView=()=>{
    
    
    const [post , setPost] = useState(initialValue);
    const [file , setFile] = useState('');
    const [image , setImage] = useState('');
  
    const url = post.picture ? post.picture :'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
    const classes = useStyles();
    const history= useNavigate();

    useEffect(()=>{
        const getImage = async()=>{
            if(file){
                const data = new FormData();
                data.append("name" , file.name);
                data.append("file" , file);

                //await uploadFile(data);
                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }

        }
        getImage();
    },[file])

    const handleChange = (e) =>{
        setPost({...post , [e.target.name]: e.target.value}) 
    }
    const savePost = async ()=>{
       await createPost(post);
       history("/");
    }
   
    const [message, setMessage] = useState('');
    const commands = [
      {
        command: 'reset',
        callback: () => resetTranscript()
      },
      {
        command: 'shut up',
        callback: () => setMessage('I wasn\'t talking.')
      },
      {
        command: 'Hello',
        callback: () => setMessage('Hi there!')
      },
    ]
    const {
      transcript,
      interimTranscript,
      finalTranscript,
      resetTranscript,
      listening,
    } = useSpeechRecognition({ commands });
   
    useEffect(() => {
      if (finalTranscript !== '') {
        console.log('Got final result:', finalTranscript);
      }
    }, [interimTranscript, finalTranscript]);
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null;
    }
   
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }
    const listenContinuously = () => {
      SpeechRecognition.startListening({
        continuous: true,
        language: 'en-GB',
      });
    };
    
  

    const copyToClipboard = () => {
       copy(transcript);
       alert('Text has been copied');
    }
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
        <InputBase 
        onChange={(e) => handleChange(e)} 
        placeholder='Title' 
        className={classes.textfield}
        name = 'title'
        />
        
        <Button onClick={()=> savePost()} variant="contained" color="primary">Publish</Button>
        </FormControl>
 
        
        <TextareaAutosize
            rowsMin={8}
            placeholder="Tell your story..."
            className={classes.textarea}
            onChange={(e) => handleChange(e)}

            name = 'description'
            // value={transcript}
            
            
        />
        <label>Author Name: </label>
        <InputBase 
        onChange={(e) => handleChange(e)} 
        placeholder='Enter your name' 
        className={classes.author}
        name = 'username'
        />
        
        <div>
                    <label>Select Articraft Type: </label>
                    <select onChange={(e) => handleChange(e)} name="categories" type="text" className={classes.category}>
                        <option>All</option>
                        <option>Music</option>
                        <option>Technology</option>
                        <option>Entertainment</option>
                        <option>Sports</option>
                        <option>Fashion</option>

                    </select>
                </div>
        

        <div style={{backgroundColor: '#3f51b5' , display: 'flex' , width: '17rem' , borderRadius: '5rem'}}>
       <span style={{color: 'white' , marginLeft: '1.5rem' , marginTop: '0.5rem', marginRight: '2rem'}}>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span>
       <div>
         
         <Refresh title="reset" type="button" onClick={resetTranscript} variant='contained' className={classes.icon} />
         <Mic type="button" onClick={listenContinuously} variant='contained' className={classes.icon}/>
         <MicOff type="button" onClick={SpeechRecognition.stopListening} variant='contained'   className={classes.icon} />
       </div>
     </div>
     <div style={{padding: '1.2rem'}}>
       {message}
     </div>
     <div style={{display: 'flex'}}>
     <TextareaAutosize
            type="text" 
            name='copy'
            className={classes.listenarea}
            rowsMin={5}
              value={transcript} 
                  placeholder='Your recording would we displayed here which you could copy and paste above' />
    
          <FileCopy variant="contained" color="primary" onClick={copyToClipboard}  className={classes.copy}/>
               
          </div>
    
          </Box>
        </>

    )
}
export default CreateView;