const express = require('express');
const { validateSignup } = require('../middleware/validate');
const { signupUser } = require('../controllers/authController');
const { addExpense } = require('../controllers/expenseTrack');

const router = express.Router();

router.post('/signup',validateSignup, signupUser);

router.post('/exp', addExpense);
module.exports = router;