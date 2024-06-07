export default class UserSchema{

    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static add(name,email,password){
          const newUser = new UserSchema(user.length+1,name,email,password);
          user.push(newUser);
          return newUser;
    }

    static login(email,password){
        const userFound = user.find(e=> e.email === email && e.password === password);
        
          return userFound;

    }
}

const user =[];