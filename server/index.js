import express from 'express';
import Connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from "path";



const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/' , Router);


if (process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname , 'client' , 'build' , 'index.html'));
    })
}
const PORT = process.env.PORT || 8000;
app.listen(PORT , ()=> console.log(`server is running successfully on port ${PORT}`));

Connection();