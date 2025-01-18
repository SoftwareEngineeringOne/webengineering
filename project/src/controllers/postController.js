import Post from "../models/post.js";

export const PostController = {
    getPosts: async (req, res) => {
        try {
            const posts = await Post.getAll();
            res.render("posts/posts", {posts});
        } catch (err) {
            console.error(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Internal Server Error");
        }
    },
    getForm: (req, res) => {
        res.render("posts/postsForm");
    },

    createPost: async (req, res) => {
        if (!req.session.loggedIn) {
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end("Forbidden");
            return;
        }
        const {title, content} = req.body;
        try {
            let post = new Post(title, content, req.session.user);
            console.log("Post:", post);
            await post.save();
        } catch (err) {
            console.error(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Internal Server Error");
            return;
        }
        console.log(title, content);
        res.end("Post created successfully");
    }
}