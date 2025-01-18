import path from "node:path";
import fs from "node:fs/promises";

const postsFile = path.join(process.cwd(), "src", "data", "posts.json");

class Post {
    /**
     * @param {string} title
     * @param {string} content
     * @param {User} author
     */
    constructor(title, content, author) {
        /** @type {string} */
        this.title = title;
        /** @type {string} */
        this.content = content;
        /** @type {string} */
        this.author = author.username;
        /** @type {Date} */
        this.createdAt = new Date();
        /** @type {boolean} */
        this.archived = false;
    }

    /**
     * Retrieves all posts from the database.
     * @returns {Promise<Post[]>}
     */
    static async getAll() {
        try {
            const data = await fs.readFile(postsFile, "utf8");
            return JSON.parse(data);
        } catch (err) {
            console.error("Error getting posts:", err);
            throw err;
        }
    }

    /**
     * Saves a post to the database.
     * @returns {Promise<void>}
     */
    async save() {
        try {
            const data = await fs.readFile(postsFile, "utf8");
            const posts = JSON.parse(data);
            posts.push(this);
            await fs.writeFile(postsFile, JSON.stringify(posts, null, 2));
        } catch (err) {
            console.error("Error saving post:", err);
            throw err;
        }
    }
}

export default Post;