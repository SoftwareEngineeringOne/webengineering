import express from "express";
import { PostController } from "../controllers/post/postController.js";
import { Roles } from "../models/user.js"
import { protectedMiddleware } from "../middleware/protected.js"

const router = express.Router();

router.use("/new", protectedMiddleware.roleProtection([Roles.ADMIN, Roles.AUTHOR]))
router.get("/new", PostController.displayForm);

router.get("/", PostController.displayAllPosts);

router.get("/:id", PostController.displayPostWithId);

router.get("/:id/edit", PostController.displayForm);

router.post("/", PostController.createPost);

router.post("/:id", PostController.updatePost);

router.delete("/:id");

export default router;
