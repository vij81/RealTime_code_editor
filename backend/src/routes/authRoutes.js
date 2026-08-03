const express = require("express");
const { register,login } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login",login);

router.get("/profile", protect, (req, res) => {
    res.status(200).json({
        success: true,
        message: "Protected Route Accessed",
        user: req.user,
    });
});

module.exports = router;