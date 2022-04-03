import mongoose from "mongoose";

const Connection=async()=>{
    
const URL = `mongodb+srv://<username>:<password>@cluster0.pxho3.mongodb.net/WeBlog?retryWrites=true&w=majority`;
try{

await mongoose.connect(URL , {useNewUrlParser: true , useUnifiedTopology: true})
console.log('Connection successful with database')
 } catch(error){
     console.log(`Error while connecting to Mongodb , ${error}`)
}
}


export default Connection;