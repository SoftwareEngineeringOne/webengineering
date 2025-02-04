import crypto from "node:crypto";
import app from "../app.js";

/**
 * Middleware to manage user sessions.
 * @param req
 * @param res
 * @param next
 */
export const sessionMiddleware = (req, res, next) => {
  console.log("Sessions: ", app.locals.sessions);

  res.locals.session = req.session;

  next();
};

/**
 * Generates a new session ID.
 * @returns {string} A new session ID.
 */
function generateSessionId() {
  return crypto.randomBytes(16).toString("hex");
}
