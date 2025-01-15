import {views} from "../util/views.js";
import User from "../models/user.js";
import crypto from "crypto";

export const loginController = {
    handleGetRequest: async (req, res) => {
        console.log("Received GET request to /auth/login");
        try {
            let pageContent = await views.loadViewWithNavbar('login');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(pageContent);
        } catch (err) {
            console.error(err);
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        }
    },
    handlePostRequest: async (req, res) => {
        console.log("Received POST request to /auth/login");

        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            const {username, password} = JSON.parse(body);

            const user = await User.loginUser(username, password);
            if (!user) {
                res.writeHead(401, {'Content-Type': 'text/plain'});
                res.end('Invalid username or password');
                return;
            }

            const sessionId = crypto.randomBytes(16).toString('base64');
            res.setHeader('Set-Cookie', `sessionId=${sessionId}; HttpOnly;`);

            console.log("Active Sessions: ", global.sessions);
            global.sessions = global.sessions || {};
            global.sessions[sessionId] = user;
            console.log("Active Sessions: ", global.sessions);

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('User logged in successfully');
        })
    }
}