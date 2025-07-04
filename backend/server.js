const express =require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT||8080;
const recipeRouter=require('./routes/recipe')
const connectionDb=require('./config/connectionDb')
const path=require('path')
connectionDb();
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/images', express.static('uploads')) // or wherever your images are stored

app.use(express.static('public'))
const userRouter=require('./routes/user')
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)

})


app.use('/',recipeRouter);
app.use('/',userRouter);
