import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port = 8000;
const host = "localhost";

const requestListener = (req, res) => {
    console.log("Method: ", req.method);
    if (req.method == "GET") {
        getHandler(req, res);
    } else if(req.method == "POST") {
        if (req.url = "/login") {
            loginHandler(req, res);
        } else if (req.url = "/register") {
            registerHandler(req, res);
        }
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("Server running...");
})

function getHandler(req, res) {
    const url = req.url;
    let filePath = './public' + (url === "/" ? '/index.html' : url);
    let ext = path.extname(filePath);
    if(ext == "") {
        filePath += ".html";
        ext = ".html";
    }


    fs.readFile(filePath, (err, data) => {
        if (err)  {
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

        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        res.end();
    })
}

function loginHandler(req, res) {
    res.writeHead(500, {'Content-Type': 'application/json'})
    const response = {
        message: "error"
    };
    res.end(JSON.stringify(response));
}

function registerHandler(req, res) {
    res.writeHead(500, {'Content-Type': 'application/json'})
    const response = {
        message: "error"
    };
    res.end(JSON.stringify(response));
}
