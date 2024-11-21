const mongoose = require('mongoose');
const costSchema = require('./CostSchema');

const expenseSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  expenses: {
    type: [costSchema], // Ensure expenses is an array of expenseSchema
    default: [],           // Default to an empty array
  },
});

module.exports = mongoose.model('Expense', expenseSchema);