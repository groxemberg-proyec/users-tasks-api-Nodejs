import { Router } from "express";
import taskControllers from "../controllers/task.controllers.js";
const router = Router();

router.route("/")
.get(taskControllers.getTasks)
.post(taskControllers.createTask);

router.route("/:id")
.get(taskControllers.getTask)
.put(taskControllers.updateTask)
.delete(taskControllers.deleteTask)
.patch(taskControllers.taskDone);

export default router;