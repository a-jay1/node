const express = require('express');
const { validateSignup } = require('../middleware/validate');
const { signupUser } = require('../controllers/authController');
const { addExpense } = require('../controllers/expenseTrack');
const { Signup } = require('../controllers/signup/signup');
const { Mailer } = require('../controllers/mailer/mailer');

const router = express.Router();

router.post('/signup',validateSignup, signupUser);

router.post('/exp', addExpense);

router.post('/signup1',Signup);

router.post('/mailer',Mailer);

module.exports = router;