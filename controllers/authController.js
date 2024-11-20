const User = require('../models/User');
const { sendResponse } = require('../utils/response');

// Signup user
const signupUser = async (req, res) => {

    console.log(req.body, "cred");

  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return sendResponse(res, 400, "All fields are required");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return sendResponse(res, 400, "User already exists");
  }

  try {
    const newUser = new User({ username, email, password });

    // Save user to DB
    await newUser.save();

    return sendResponse(res, 201, "User registered successfully");
  } catch (error) {
    console.error(error);
    return sendResponse(res, 500, "Server error");
  }
};

module.exports = { signupUser };
