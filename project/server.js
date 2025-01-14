import http from "node:http";
import { handleRequest } from "./routes/router.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  console.log("Received Request!")
  try {
    await handleRequest(req, res);
    console.log("Handled request...")
  } catch (err) {
    console.error("Server error:", err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
