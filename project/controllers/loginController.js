import fs from "node:fs/promises";
import path from "node:path";
import { validateUser } from "../models/userModel.js";

export async function loginController(req, res) {
  if (req.method === "GET") {
    try {
    console.log("Displaying Login Page");
      const filePath = path.join(process.cwd(), "views", "login.html");
      const data = await fs.readFile(filePath, "utf-8");

      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.writeHead(200);
      res.end(data);
    } catch (err) {
      console.error("Error loading login page:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  } else if (req.method === "POST") {
    console.log("User tried to login");
      res.statusCode = 500;
      res.end("Internal Server Error");
  }
}
