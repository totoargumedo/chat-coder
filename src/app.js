import "dotenv/config.js";
import express from "express";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import logger from "morgan";
import error_handler from "./middlewares/errorHandler.js";
import notFoundHandler from "./middlewares/notFoundHandler.js";
import main_router from "./router/index.js";

//server creation
const server = express();

//setting template engine
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/views");

//setting midlewares
server.use("/public", express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger("dev"));

//setting router
server.use(main_router);

//
server.use(error_handler);
server.use(notFoundHandler);

export default server;
