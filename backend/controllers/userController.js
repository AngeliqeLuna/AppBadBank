const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const registerUser = asyncHandler (async (req.res) => {

const {name, email, password} = req.body

//Validation :)
if(!name || !email || !password) {
    res.status(400)
    throw new Error ("Please fill all the required fields")
}
if(password.length <8){
    res.status(400)
    throw new Error ("Password must be up to 8 characters")
}

// Checar si el email ya existe
const userExists= await User.findOne({email})

if(userExists) res.status(400)
throw new Error ("The email has been registered")

};
//Crear nuevo usuario
const user = await User.create({
    name,
    email,
    password
})

if (user){
    const {_id,name,email}= user
    res.status(201).json({
        _id,name,email
    })
} else{
    res.status(400)
    throw new Error("Invalid user data");
}
);

module.exports = {

    registerUser,
};



