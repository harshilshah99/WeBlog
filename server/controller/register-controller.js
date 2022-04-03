import { response } from "express";
import Register from "../schema/register-schema.js";

export const register =async(request , response)=>{
    console.log(request.body);
    try{
       
        const register = await new Register(request.body);
        register.save();
        response.status(200).json('registration successful');
       
    }catch(error){
        response.status(500).json(error);
    }
};

export const login = async(request , respose)=>{

    try{
    
        const login = await Register.findone({
            email: request.body.email,
            password: request.body.password,
        })

        if(login){
            return response.json({status: 'ok' , login: true})
        }else{
            return response.json({ status: 'error' , login: false})
        }
    }catch(error){
        response.status(500).json(error);
    }
        
       
}