import mongoose from "mongoose";
import {Schema} from "mongoose";

const testSchema=new Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true,
}








},{timestamps:true})

const Test=mongoose.model("Test",testSchema);
export default Test;
