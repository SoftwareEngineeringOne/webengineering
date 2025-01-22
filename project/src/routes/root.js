import {homeController} from "../controllers/home/homeController.js";
import express from "express";

/**
 * @module routes/index
 */

/** Express router providing main routes. */
const router = express.Router();

/**
 * Route serving the homepage.
 * @name get/
 * @function
 * @memberof module:routes/index
 * @inner
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
router.get("/", homeController.getHomepage);

/**
 * Route serving a test error page.
 * @name get/error
 * @function
 * @memberof module:routes/index
 * @inner
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 * @param {function} next - The next middleware function.
 */
router.get("/error", (req, res, next) => {
    const err = new Error("This is a test error");
    err.status = 500;
    next(err);
});

/**
 * Route redirecting to the login page.
 * @name all/login
 * @function
 * @memberof module:routes/index
 * @inner
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
router.all("/login", (req, res) => {
    res.redirect("/auth/login");
});

/**
 * Route redirecting to the registration page.
 * @name all/register
 * @function
 * @memberof module:routes/index
 * @inner
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
router.all("/register", (req, res) => {
    res.redirect("/auth/register");
});

export default router;
