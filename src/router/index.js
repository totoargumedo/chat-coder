import { Router } from "express";
import views_router from "./views/index.js";

const main_router = Router();

main.use("/", views_router);

export default main_router;
