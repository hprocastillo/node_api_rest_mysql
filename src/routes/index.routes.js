import {Router} from "express";
import {getIndex} from "../controllers/index.controller.js";

const router = Router();

router.get('/index', getIndex);

export default router;