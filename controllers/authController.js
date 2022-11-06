const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../model/User');
module.exports.add_user = async (req, res) => {
    try {
        const { user_id,
            name,
            lastname,
            phone,
            email,
            level,
            active,
            username,
            password,
            role_id,
            position_id,
            department_id } = req.body;
        if (!(username && password && name && lastname)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await User.findOne({ username });
        if (oldUser) {
            return res.status(409).send("You are oldUser plese login,Now!!");
        }
        encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            user_id,
            name,
            lastname,
            phone,
            email,
            level,
            active,
            username,
            password: encryptedPassword,
            role_id,
            position_id,
            department_id
        })
        const token = jwt.sign(
            { user_id: user._id, username },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2d"
            }
        )
        user.token = token;
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
}
module.exports.getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        let user = await User.findOne({ username });
        console.log('user in========>',user)
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                {
                    user_id: user._id, username
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )
            user.token = token;
            console.log('user========>',user)
            res.status(200).json(JSON.stringify(user));
        }
        res.status(400).send('Invalid');
    } catch (err) {
        console.log(err);
    }
}
module.exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports.logout = async (req, res) => {
    req.token = "";
    {
        req.token == "" ?
            res.status(200).send('Plz Login again').redirect('/login')
            : res.status(400).send('Invalid')
    }
}

module.exports.deleteUser = async (req, res) => {
    console.log(req.params)
    let data = await User.deleteOne(req.params);
    res.send(data);
}
