import { v4 as uuidv4 } from 'uuid';
let users=[];

export const getUsers=(req,res)=>{
    res.send(users);
}


export const createUser=(req,res) =>{
    const user = req.body;

    users.push({ ...user, id:uuidv4() });

    res.send(`user with the same ${user.firstname} added to the database!`);
}

export const getUser=(req,res)=>{
    const {id} =req.params;
    const foundUser=users.find((users) => users.id =id);
    res.send(foundUser);
}

export const deleteUser=(req,res)=>{
    const {id}=req.params;
    users = users.filter((user)=> user.id != id);
    res.send(`usr with the id ${id} deleted from the database.`);

}

export const updateUser=(req,res)=>{
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const user = users.find((user) => user.id === id); // Fixed the variable name and comparison operator
    if (user) {
        if (firstname) user.firstname = firstname; // Fixed the variable name
        if (lastname) user.lastname = lastname; // Fixed the variable name
        if (age) user.age = age; // Fixed the variable name
        res.send(`Updated user with the id ${id} has been updated`);
    } else {
        res.status(404).send(`User with id ${id} not found`); // Handle case when user is not found
    }
}