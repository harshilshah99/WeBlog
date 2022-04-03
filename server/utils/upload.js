
import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url:'mongodb+srv://user:12345@cluster0.pxho3.mongodb.net/WeBlog?retryWrites=true&w=majority',
    options: {useUnifiedTopology : true , useNewUrlParser: true},
    file: (request , file)=>{
        const match = ["image/png" , "image/jpg"];

        if(match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return{
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`,
        }
    }

})

export default multer({ storage });