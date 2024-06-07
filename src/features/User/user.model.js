export default class UserSchema{

    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getAll(){
        return users;
    }

    static add(name,email,password){
          const newUser = new UserSchema(users.length+1,name,email,password);
          users.push(newUser);
          return newUser;
    }

    static login(email,password){
        const userFound = users.find(e=> e.email === email && e.password === password);
        
          return userFound;

    }
}

const users = [
    new UserSchema(1, 'Alice Smith', 'alice@example.com', 'password123'),
    new UserSchema(2, 'Bob Johnson', 'bob@example.com', 'securePass!'),
    new UserSchema(3, 'Charlie Brown', 'charlie@example.com', 'charlie2021'),
    new UserSchema(4, 'Diana Prince', 'diana@example.com', 'wonderWoman'),
    new UserSchema(5, 'Ethan Hunt', 'ethan@example.com', 'missionImpossible')
];