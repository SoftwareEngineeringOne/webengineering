import express from "express";
import {homeController} from "../controllers/homeController.js";

const router = express.Router();

router.get("/", homeController.getHomepage);

router.get("/error", (req, res, next) => {
    const err = new Error("This is a test error");
    err.status = 500;
    next(err);
})

router.all("/login", (req, res) => {
    res.redirect("/auth/login")
})

router.all("/login", (req, res) => {
    res.redirect("/auth/register")
})

export default router;
