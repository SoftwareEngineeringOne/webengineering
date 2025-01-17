import crypto from "node:crypto";
import Session from "../models/session.js";
import app from "../app.js";

/**
 * Middleware to manage user sessions.
 * @param req
 * @param res
 * @param next
 */
export const sessionMiddleware = (req, res, next) => {
    console.log("Sessions: ", app.locals.sessions);

    const sessionId = req.cookies.sessionId;
    let session;

    if (!sessionId || !app.locals.sessions[sessionId]) {
        const newSessionId = generateSessionId();
        session = new Session(newSessionId);

        res.cookie("sessionId", newSessionId, {path: "/", httpOnly: true});
        app.locals.sessions[newSessionId] = session;
    } else {
        session = app.locals.sessions[sessionId];
    }

    req.session = session;
    res.locals.session = session;

    next();
}

/**
 * Generates a new session ID.
 * @returns {string} A new session ID.
 */
function generateSessionId() {
    return crypto.randomBytes(16).toString("hex");
}
