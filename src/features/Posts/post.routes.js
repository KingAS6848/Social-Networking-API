import express from 'express';
import postController from './post.controller.js';
const postRoute = express.Router();
import { upload } from '../../middlwares/upload.middleware.js';

const controller = new postController();


postRoute.post('/',upload.single('imageURL')  ,controller.newPost);
postRoute.get('/',controller.getAllPosts);
postRoute.get('/:id',controller.getByPostId);

export default postRoute;