import http from "node:http";
import { router } from "./routes/router.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    await router.handleRequest(req, res);
  } catch (err) {
    res.statusCode = 500;
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
