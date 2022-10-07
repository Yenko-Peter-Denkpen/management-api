const User = require("../models/UsersSchema")
const bcrypt = require("bcrypt")
const {validate} =require("../config/Validator")
const {generateToken} =require("../utils/generateToken")



// adding a user
const addUser = async (req, res) => {
        const {username, email, password } =req.body;
        const valid = await validate({username, email, password});
        if (valid) {
            const hashedPassword = await bcrypt.hash(valid.password, 8) 
            const savedUser = await User.create({
               username,
               email,
               password:hashedPassword, 
            });
 if (savedUser) {
    return res.status(201) .json({
       username: savedUser.username,
       email: savedUser.email,
       password: savedUser.password,
       id: savedUser._id,
         token: generateToken(savedUser._id)
    });
}

           return  res.status(201).json({
                success: true,
                message: "user created",
                User,
            });
        } else {
            res.status(400).json({
                error: true,
                message: "Invalid data",
            });
        }
};

// user login
async function loginUser(req, res) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({
                error: true,
                message: "Account not found",
            });
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            return res.status(400).json({
                error: true,
                message: "Invalid password"
            });
        }

        return res.status(200).send({
          success: true,
          message: "User logged in",  
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
           error: true,
           message: "coudn't login. please try again" ,
        });
    }
}

//getting a user
const getUsers= async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}


module.exports = {addUser, loginUser, getUsers }