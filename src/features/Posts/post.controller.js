import PostSchema from "./post.model.js";

export default class postController{


    getAllPosts(req,res){
        const allPost = PostSchema.getAll();
      return  res.status(200).send(allPost);
    }

    getByPostId(req,res){
        const post = PostSchema.getByID(req.params.id);
        if(post){
            return res.status(200).send(post);
        }
        return  res.status(404).send({
            success:"false",
            message:"Product not found"
        });
    }

    getByUserId(req,res){
        const {email} = req.query;
        const userPosts = PostSchema.getByUserEmail(email);
        res.send(userPosts);
    }

    newPost(req,res){

            const caption = req.body.caption;
            const userID = req.user.id;
            const imageURL = req.file.path;
            const newPost = PostSchema.newPost(userID,caption,imageURL);
    
            if(newPost){
                console.log(newPost);
                return res.status(201).send({
                    success:"true",
                    message:"Post Created Sucessfully"
                });
            
            }
            
            return res.status(400).send({
                success:"false",
                message:"Bad Request"
            });
    }

}