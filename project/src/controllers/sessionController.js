import { parseCookies } from "../util/cookies.js";
export const sessionController = {
  validateSession: async (req, res) => {
    console.log("SessionValidation requested!");
    const cookies = parseCookies(req.headers.cookie);
    const sessionId = cookies["sessionId"];

    global.sessions = global.sessions || {};
    console.log("Sessions:", global.sessions);
    const user = global.sessions[sessionId];

    if (!user) {
      console.log("Not logged in");
      res.writeHead(401, { "Content-Type": "text/plain" });
      res.end("Not logged in");
    } else {
      console.log("Logged In:", user);
      const data = JSON.stringify({"username": user.username})
      console.log("Data:", data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    }
  },
};
