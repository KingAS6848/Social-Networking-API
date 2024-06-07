import express from 'express';
import userRoute from './src/features/User/user.routes.js';


const server = express();
const port = 8000;

server.use(express.json());


server.use('/api/user',userRoute);


server.listen(port,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Server Running Succesfully: ", port);
})