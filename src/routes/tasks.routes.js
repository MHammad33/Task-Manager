const express = require("express");
const router = express.Router();

// GET /api/v1/tasks
router.route("/").get((req, res) => { res.send("Tasks") })

module.exports = router;