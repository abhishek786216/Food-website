const mongoose=require('mongoose')

const reipeSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
      ingredients:{
        type:Array,
        required:true
    },
      instructions:{
        type:String,
        required:true
    },
    time:{
        type:String,
      
    },

      converImage:{
        type:String,
       
    },
    
      createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }



},{timestamps:true})



module.exports=mongoose.model('recipe',reipeSchema)