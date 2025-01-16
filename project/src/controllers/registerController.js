import User from "../models/user.js";

export const registerController = {
    handleGetRequest: async (req, res) => {
        console.log("Received GET request to /auth/register");
        try {
            res.render("register");
        } catch (err) {
            console.error(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Internal Server Error");
        }
    },
    handlePostRequest: async (req, res) => {
        console.log("Received POST request to /auth/register");

        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", async () => {
            const {username, email, password} = JSON.parse(body);

            const user = new User(username, email);
            const success = await user.registerUser(password);

            if (success) {
                res.writeHead(200, {"Content-Type": "text/plain"});
                res.end("User created successfully");
            } else {
                res.writeHead(400, {"Content-Type": "text/plain"});
                res.end("User already exists");
            }
        });
    },
};
