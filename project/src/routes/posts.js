import express from "express";
import {PostController} from "../controllers/postController.js";

const router = express.Router();

router.get("/new", PostController.getForm);

router.get("/", PostController.getPosts);

router.post("/", PostController.createPost);

router.get("/:id");

router.put("/:id");

router.delete("/:id");

export default router;
