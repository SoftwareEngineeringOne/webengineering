import crypto from "node:crypto";
import Session from "../models/session.js";
import app from "../app.js";

export const sessionMiddleware = (req, res, next) => {
    console.log("Sessions: ", app.locals.sessions);
    // If no session id
    if (!req.cookies.sessionId || !app.locals.sessions[req.cookies.sessionId]) {
        const sessionId = generateSessionId();
        const session = new Session(sessionId);

        res.cookie("sessionId", sessionId, {path: "/", httpOnly: true});
        app.locals.sessions[sessionId] = session;
        req.session = session;
        res.locals.session = session;
        next()
    }

    req.session = app.locals.sessions[req.cookies.sessionId];
    res.locals.session = req.session;

    next();
}

/**
 * @returns {string}
 */
function generateSessionId() {
    return crypto.randomBytes(16).toString("hex");
}