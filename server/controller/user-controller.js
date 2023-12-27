import User from '../schema/User-schema.js';

export const signup = async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser) {
            return res.status(409).json({ message: "Username already exists" });
        }
        const user = await req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const userLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        let user = await User.findOne({ username: username, password: password });

        if (user) {
            return res.status(200).json({ data: user })
        }
        else {
            return res.status(401).json({ message: "Invalied Authentication" });
        }

    } catch (error) {
        return res.status(500).json('Error', error.message)

    }
}
