import express from "express";
import {registerController} from "../controllers/registerController.js";
import {loginController} from "../controllers/loginController.js";

const app = express();

// Middleware for serving static files
app.use("/public", express.static("public"));

// Routes
app.get("/auth/register", registerController.handleGetRequest);
app.post("/auth/register", registerController.handlePostRequest);

app.get("/auth/login", loginController.handleGetRequest);
app.post("/auth/login", loginController.handlePostRequest);


// 404 Not Found Handler
app.use((req, res) => {
    res.status(404).send("Not Found");
});