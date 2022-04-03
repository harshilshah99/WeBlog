import mongoose from "mongoose";

const RegisterSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required: false,
    },
    
})

const register = mongoose.model('register' , RegisterSchema);

export default register;