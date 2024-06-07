import UserSchema from "./user.model.js";

export default class userController{


  signup(req,res) {
    
    const {name,email,password} = req.body;
     const newUser = UserSchema.add(name,email,password);
     if(!newUser){
        return res.status(400).send("Invalid Credentials");

     }
     return res.status(201).send(newUser);

 }

 login(req,res){
    const {email,password} = req.body;
    const userFound = UserSchema.login(email,password);
    if(!userFound){
        return res.status(404).send("User Not Found");
    }

    return res.status(200).send(userFound);
 }
}