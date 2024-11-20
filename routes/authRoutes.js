const express = require('express');
const { validateSignup } = require('../middleware/validate');
const { signupUser } = require('../controllers/authController');

const router = express.Router();

router.post('/signup',validateSignup, signupUser);

module.exports = router;