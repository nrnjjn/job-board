import { Schema,model } from "mongoose";

const userSchema = new Schema({


    Name:{
        type:String
    },
    Email:{
        type:String
    },
    
    userType:{
        type:String,
    },
    Password:{
        type:String
    },
    confirmPassword:{
        type:String
    },
    
})


const User=model('user', userSchema)
export default User