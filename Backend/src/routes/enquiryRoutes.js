const express = require("express");
const router = express.Router();

const createEnquiry = require("../controller/enquiryController");

router.post("/", createEnquiry);

module.exports = router;
