import { Router } from "express";  
import outhControlers from "../controllers/outh.controlers.js";


const router = Router();

router.post("/", outhControlers.login);

export default router;