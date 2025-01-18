import fs from "node:fs/promises";
import path from "node:path";

const usersFile = path.join(process.cwd(), "src", "data", "users.json");

/**
 * @typedef {Symbol} Role
 */
/**
 * @typedef {Object} Roles
 * @property {Role} ADMIN
 * @property {Role} AUTHOR
 * @property {Role} USER
 */
/** @type {Readonly<Roles>} */
const Roles = Object.freeze({
    /** @type {Role} */
    ADMIN: Symbol("admin"),
    /** @type {Role} */
    AUTHOR: Symbol("author"),
    /** @type {Role} */
    USER: Symbol("user"),
})

/**
 * User class
 */
class User {
    /**
     * @param {string} username
     * @param {string} email
     * @param {Role} role
     */
    constructor(username, email, role = Roles.USER) {
        /** @type {string} */
        this.username = username;
        /** @type {string} */
        this.email = email;
        /** @type {Role} */
        this.role = role;
    }

    /**
     * Logs in a user.
     * @param username
     * @param password
     * @returns {Promise<User|null>}
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
