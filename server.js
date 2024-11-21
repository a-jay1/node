require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const authRoutes = require('./src/routes/authRoutes');
const app = express();

const port = 3000;

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/',(req, res) => {
    res.send('hi');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})