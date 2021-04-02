var express = require("express");
var applicationController = require("../controllers/applicationController");
var router = express.Router();

router.route("/").post(applicationController.postApplication);

module.exports = router;
