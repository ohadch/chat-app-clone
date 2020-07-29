const express = require("express")
const controller = require("./conversations.controller");
const router = express.Router();

router.get("/", controller.getConversations)

router.post("/", controller.createConversation)

module.exports = router;