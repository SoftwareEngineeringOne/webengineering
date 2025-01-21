import express from "express";
import {PostController} from "../controllers/postController.js";

const router = express.Router();

router.get("/new", PostController.displayForm);

router.get("/", PostController.displayAllPosts);

router.get("/:id", PostController.displayPostWithId);

router.get("/:id/edit", PostController.displayForm);

router.post("/", PostController.createPost);


router.post("/:id", PostController.updatePost);

router.delete("/:id");

export default router;
