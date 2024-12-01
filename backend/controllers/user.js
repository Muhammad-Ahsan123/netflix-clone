const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: 'Invalid Data',
                success: false
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Email doesn't Exist!",
                success: false
            })
        }
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Password is Incorrect',
                success: false
            })
        }
        let payload = { userId: user._id }
        var token = jwt.sign(payload, 'ahaihidhisd', { expiresIn: '1d' });
        console.log("USER", user);

        return res.status(200).cookie('token', token, { httpOnly: true }).json({
            user: user,
            message: 'User Successfully Login',
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'An unexpected error occurred.',
            success: false,
            error: error.message,
        })

    }


}
const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Validate input
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: 'Invalid Data',
                success: false,
            });
        }

        // Check if the email already exists
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'This email already exists!',
                success: false,
            });
        }

        let hashPassword = await bcrypt.hash(password, 10);
        await userModel.create({
            fullName,
            email,
            password: hashPassword,
        });
        // Create new user


        // Respond with success
        return res.status(201).json({
            message: 'User registered successfully!',
            success: true,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'An unexpected error occurred.',
            success: false,
            error: error.message,
        });
    }
};
const logout = async (req, res) => {
    return res.status(200).cookie('token', '', { expiresIn: new Date(Date.now()), httpOnly: true }).json({
        message: 'User Successfully Logout',
        success: true
    })
}
module.exports = {
    register,
    login,
    logout
};
