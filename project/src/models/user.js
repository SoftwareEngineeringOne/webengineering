import fs from "node:fs/promises";
import path from "node:path";

const usersFile = path.join(process.cwd(), "src", "data", "users.json");

/**
 * User class
 */
class User {
    constructor(username, email) {
        /** @type {string} */
        this.username = username;
        /** @type {string} */
        this.email = email;
    }

    /**
     * Logs in a user.
     * @param username
     * @param password
     * @returns {Promise<*|null>}
     */
    static async loginUser(username, password) {
        try {
            const data = await fs.readFile(usersFile, "utf8");
            const users = JSON.parse(data);

            const user = users.find(
                (u) => u.username === username && u.password === password,
            );

            return user || null;
        } catch (err) {
            console.error("Error validating user:", err);
            return null;
        }
    }

    /**
     * Registers a new user.
     * @param password
     * @returns {Promise<boolean>}
     */
    async registerUser(password) {
        if (!this.username || !this.email || !password) return false;

        try {
            const data = await fs.readFile(usersFile, "utf8");
            const users = JSON.parse(data);

            // Check if user already exists
            if (users.some((u) => u.email === this.email)) {
                return false;
            }

            // Add new user
            users.push({username: this.username, email: this.email, password});
            await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

            return true;
        } catch (err) {
            console.error("Error creating user:", err);
            return false;
        }
    }
}

export default User;
