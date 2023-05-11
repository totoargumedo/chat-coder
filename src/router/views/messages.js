import { Router } from "express";

const messages_router = Router();

//endpoints
messages_router.get("/chat", (req, res, next) => {
  try {
    return res.render("chat", {
      title: "Super chat",
      fileScript: "chat.js",
    });
  } catch (error) {
    next(error);
  }
});

export default messages_router;
