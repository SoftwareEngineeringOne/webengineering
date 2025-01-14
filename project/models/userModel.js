import fs from "node:fs/promises";
import path from "node:path";

const usersFile = path.join(process.cwd(), "data", "users.json");

export async function createUser(username, password) {
  if (!username || !password) return false;

  try {
    const data = await fs.readFile(usersFile, "utf8");
    const users = JSON.parse(data);

    // Check if user already exists
    if (users.some((u) => u.username === username)) {
      return false;
    }

    // Add new user
    users.push({ username, password });
    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

    return true;
  } catch (err) {
    console.error("Error creating user:", err);
    return false;
  }
}

export async function validateUser(username, password) {
  try {
    const data = await fs.readFile(usersFile, "utf8");
    const users = JSON.parse(data);

    return users.some(
      (u) => u.username === username && u.password === password,
    );
  } catch (err) {
    console.error("Error validating user:", err);
    return false;
  }
}
