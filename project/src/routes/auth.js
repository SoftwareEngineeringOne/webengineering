import express from "express";
import {registerController} from "../controllers/registerController.js";
import {loginController} from "../controllers/loginController.js";

const router = express.Router();

router.get("/login", loginController.handleGetRequest);
router.post("/login", loginController.handlePostRequest);

router.get("/register", registerController.handleGetRequest);
router.post("/register", registerController.handlePostRequest);


export default router;