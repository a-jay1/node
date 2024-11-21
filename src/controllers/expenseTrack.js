const Exp = require('../models/Track');

// Add Expense and Calculate Totals
const addExpense = async (req, res) => {
  const { username, description, amount } = req.body;

  if (!username || !amount) {
    return res.status(400).json({ message: 'Username and amount are required.' });
  }

  try {
    // Find the user by username
    let user = await Exp.findOne({ username });

    // If user doesn't exist, create a new user with the expense
    if (!user) {
      user = new Exp({ username, expenses: [{ amount, description, date: new Date() }] });
    } else {
      // Initialize expenses array if it's undefined
      if (!user.expenses) {
        user.expenses = [];
      }

      // Add the new expense to the user's expenses
      user.expenses.push({ amount, description, date: new Date() });
    }

    // Save the user with the updated expenses
    await user.save();

    // Calculate totals (today, this month, this year)
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // YYYY-MM-DD

    let totalToday = 0;
    let totalThisMonth = 0;
    let totalThisYear = 0;

    user.expenses.forEach((expense) => {

      console.log("expenses: ", expense);

      const expenseDate = new Date(expense.date);

      // Skip invalid dates
      if (isNaN(expenseDate)) return;

      const expenseDay = expenseDate.toISOString().split('T')[0];

      if (expenseDate.getFullYear() === now.getFullYear()) {
        totalThisYear += expense.amount;

        if (expenseDate.getMonth() === now.getMonth()) {
          totalThisMonth += expense.amount;

          if (expenseDay === today) {
            totalToday += expense.amount;
          }
        }
      }
    });

    // Respond with success message and calculated totals
    res.status(201).json({
      message: 'Expense added successfully',
      totals: {
        totalToday,
        totalThisMonth,
        totalThisYear,
      },
    });
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  addExpense,
};
