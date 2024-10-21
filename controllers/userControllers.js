import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, email, password: hashedPassword };

    User.create(newUser, (err, result) => {
        if (err) return res.status(400).json({ message: 'Error registering user' });
        
        return res.status(200).json({ message: 'User registered successfully' });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email, async (err, users) => {
        if (err || users.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        return res.json({ token });
    });
};

export {register};
export {login};
export default {
    register,
    login
};
