import Post from "../models/post.js";
import {Roles} from "../models/user.js";

export const PostController = {
    displayAllPosts: async (req, res) => {
        try {
            const posts = await Post.getAll();
            res.render("posts/posts", {posts});
        } catch (err) {
            console.error(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Internal Server Error");
        }
    },

    displayPostWithId: async (req, res, next) => {
        try {
            const post = await Post.getWithId(req.params.id);
            if (!post) {
                next({status: 404, message: "Post not found"});
                return;
            }
            res.render("posts/post", {post});
        } catch (err) {
            console.error(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Internal Server Error");
        }
    },

    displayForm: async (req, res, next) => {
        if (!req.params.id) {
            res.render("posts/postsForm");
            return
        }

        const post = await Post.getWithId(req.params.id);
        if (!post) {
            next();
            return;
        }
        console.log("Existing post:", post);
        res.render("posts/postsForm", {existing_post: post});
    },

    createPost: async (req, res) => {
        if (!req.session.loggedIn) {
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end("Forbidden");
            return;
        }
        const {title, content} = req.body;
        try {
            let post = new Post(title, content, req.session.user.username);
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
    },

    updatePost: async (req, res) => {
        if (!req.params.id) {
            res.writeHead(400, {"Content-Type": "text/plain"});
            res.end("Bad Request");
            return;
        }

        const post = await Post.getWithId(req.params.id);
        console.log("Found Post:", post);
        console.log("Type: ", typeof post);

        if (!req.session.loggedIn || (req.session.user.username !== post.author && req.session.user.role !== Roles.ADMIN)) {
            res.writeHead(403, {"Content-Type": "text/plain"});
            res.end("Forbidden");
            return;
        }

        const {title, content} = req.body;
        try {
            post.update(title, content);
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end("Post updated successfully");
        } catch (err) {
            console.error(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Internal Server Error");
        }

    }
}