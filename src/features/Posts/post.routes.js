import express from 'express';
import postController from './post.controller.js';
import {uploadMiddlware} from '../../middlwares/upload.middlware.js';
const postRoute = express.Router();

const controller = new postController();


postRoute.post('/',uploadMiddlware.single('imageURL')  ,controller.newPost);
postRoute.get('/',controller.getAllPosts);

export default postRoute;