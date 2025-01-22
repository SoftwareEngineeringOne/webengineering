import express from "express";
import { PostController } from "../controllers/post/postController.js";
import { Roles } from "../models/user.js"
import { protectedMiddleware } from "../middleware/protected.js"

const router = express.Router();

const roleMiddleware = protectedMiddleware.roleProtection([Roles.ADMIN, Roles.AUTHOR])

router.use("/new", roleMiddleware); 
router.get("/new", PostController.displayForm);

router.get("/", PostController.displayAllPosts);

router.get("/:id", PostController.displayPostWithId);

router.use("/:id/edit", roleMiddleware)
router.get("/:id/edit", PostController.displayForm);
router.post("/:id/edit", roleMiddleware)

router.post("/:id", roleMiddleware); 
router.post("/:id", PostController.updatePost);
router.post("/", roleMiddleware);
router.post("/", PostController.createPost);


router.delete("/:id", roleMiddleware)
router.delete("/:id");

export default router;
