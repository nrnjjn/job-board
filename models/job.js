import { Schema,model } from "mongoose";
import User from "./user.js";

const jobSchema = new Schema({

    Job:{
        type:String
    },
    Description:{
        type:String
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:User
    }
    
})


const Job=model('job', jobSchema)
export default Job