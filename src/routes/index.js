import express from "express";
import usersRoute from "./usersRoute.js";

const router = express.Router();

// Routes
router.use("/users", usersRoute);

export default router;
