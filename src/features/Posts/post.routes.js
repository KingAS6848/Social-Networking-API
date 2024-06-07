import express from 'express';
import postController from './post.controller.js';
const postRoute = express.Router();
import { upload } from '../../middlwares/upload.middleware.js';

const controller = new postController();


postRoute.post('/',upload.single('imageURL')  ,controller.newPost);
postRoute.get('/all',controller.getAllPosts);
postRoute.get('/:id',controller.getByPostId);
postRoute.get('/user',controller.getByUserId);



export default postRoute;