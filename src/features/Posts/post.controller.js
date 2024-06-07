import PostSchema from "./post.model.js";

export default class postController{


    getAllPosts(req,res){
        const allPost = PostSchema.getAll();
      return  res.status(200).send(allPost);
    }

    newPost(req,res){

            const caption = req.body.caption;
            const userID = req.user.id;
            const imageURL = req.file.path;
            const newPost = PostSchema.newPost(userID,caption,imageURL);
    
            if(newPost){
                console.log(newPost);
                return res.status(200).send({
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