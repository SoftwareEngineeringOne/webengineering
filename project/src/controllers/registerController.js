import User from "../models/user.js";

export const registerController = {
    handleGetRequest: async (req, res, next) => {
        try {
            res.render("register");
        } catch (err) {
            next(err)
        }
    },
    handlePostRequest: async (req, res) => {

        const {username, email, password} = req.body;

        const user = new User(username, email);
        const success = await user.registerUser(password);

        if (success) {
            req.session.login(user);
            res.status(200).json(user);
        } else {
            res.writeHead(400, {"Content-Type": "text/plain"});
            res.end("User already exists");
        }
    },
};
