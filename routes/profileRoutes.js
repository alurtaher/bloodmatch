const express = require("express");
const { protect } = require("../middleware/auth");
const { getProfile,getProfileData,updateProfile} = require("../controllers/profileController");

const router = express.Router();

// GET logged-in user data
router.get("/", protect, getProfile);

router.get("/data", protect, getProfileData);

router.post("/update", protect, updateProfile);

module.exports = router;