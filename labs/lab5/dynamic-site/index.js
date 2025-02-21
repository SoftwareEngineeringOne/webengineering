import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port = 8000;
const host = "localhost";

const requestListener = (req, res) => {
    console.log("Method: ", req.method);
    console.log("Url: ", req.url);
    if (req.method == "GET") {
        getHandler(req, res);
    } else if (req.method == "POST") {
        if (req.url === "/login") {
            loginHandler(req, res);
        } else if (req.url === "/register") {
            registerHandler(req, res);
        }
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("Server running...");
})

function getHandler(req, res) {
    const url = req.url == '/private' ? '/index.html' : req.url;
    let filePath = './public' + (url === "/" ? '/index.html' : url);
    let ext = path.extname(filePath);
    if (ext == "") {
        filePath += ".html";
        ext = ".html";
    }


    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>404 Not Found</h1>");
            return;
        }


        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'text/javascript',
        };

        const contentType = mimeTypes[ext] || 'text/html';

        res.writeHead(200, { 'Content-Type': contentType });
        res.write(data);
        res.end();
    })
}

function loginHandler(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        let data;
        try {
            data = JSON.parse(body);
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Invalid Request" }));
        }

        const requiredFields = ["username", "password"];
        const missingFields = requiredFields.filter(field => !data[field]);

        if (missingFields.length > 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: `Missing fields: ${missingFields.join(', ')}` }));
        }

        const filePath = path.join("./", 'users.json');

        fs.readFile(filePath, 'utf8', (err, fileData) => {
            let users = [];

            if (!err && fileData) {
                try {
                    users = JSON.parse(fileData);
                } catch (jsonErr) {
                    users = [];
                }
            }

            const existingUser = users.find(user => user.username === data.username);
            if (existingUser === undefined || existingUser.password !== data.password) {
                res.writeHead(409, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: "Username or Password is incorrect" }));
            }
        })

        const privateSite = path.join(".", "private", "private.html")

        fs.readFile(privateSite, (err, data) => {
            if (err) {
                console.error(err);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("<h1>404 Not Found</h1>");
                return;
            }


            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    })
}

function registerHandler(req, res) {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        let data;
        try {
            data = JSON.parse(body);
        } catch (error) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Invalid Request" }));
        }

        const requiredFields = ["first_name", "last_name", "username", "password", "gender", "topic"];
        const missingFields = requiredFields.filter(field => !data[field]);

        let message = [];
        if (missingFields.length > 0) {
            message.push(`Missing fields: ${missingFields.join(', ')}`);
        }

        let regex = /[^A-Za-z0-9-_]/;
        if (regex.test(data.first_name) || regex.test(data.last_name) || regex.test(data.username)) {
            message.push(`One of the top three inputs has invalid special characters`);
        }

        regex = /[!#_,+\-?]/;
        if (!regex.test(data.password)) {
            message.push(`Password does not contains of the following symbols: !#,+-_?.`);
        }

        regex = /[0-9]/;
        if (!regex.test(data.password)) {
            message.push(`Password does not contain a figure`);
        }

        if (message.length !== 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: message.join(`<br>`) }));
        }

        const filePath = path.join("./", 'users.json');

        fs.readFile(filePath, 'utf8', (err, fileData) => {
            let users = [];

            if (!err && fileData) {
                try {
                    users = JSON.parse(fileData);
                } catch (jsonErr) {
                    users = [];
                }
            }

            const existingUser = users.find(user => user.username === data.username);
            if (existingUser) {
                res.writeHead(409, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: "Username already exists" }));
            }
            users.push(data);

            fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: "Internal Server Error" }));
                }

                res.writeHead(201, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: `Hello ${data.first_name} ${data.last_name}!` }));
            });
        });

    });
}
