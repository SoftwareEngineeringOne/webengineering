import fs from "node:fs/promises";
import path from "node:path";
import { createUser } from "../models/userModel.js";

export async function registerController(req, res) {
  if (req.method === "GET") {
    try {
      const filePath = path.join(process.cwd(), "views", "register.html");
      const data = await fs.readFile(filePath, "utf-8");

      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.writeHead(200);
      res.end(data);
    } catch (err) {
      console.error("Error loading register page:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  } else if (req.method === "POST") {
    console.log("User tried to register");
      res.statusCode = 500;
      res.end("Internal Server Error");
  }
}
