const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/loginsignup")
.then(()=>{    
    console.log(" MongoDB Connected ");
})
.catch((err)=>{
    // console.log(" MongoDB Not Connected ");
    console.log(err);
})

const loginschema = new mongoose.Schema({
 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const collection = new mongoose.model("Collect",loginschema)

module.exports = collection;