const cron = require('node-cron');
const { Mailer } = require('../controllers/mailer/mailer');

const Auto = () => {
    cron.schedule('*/30 * * * *', () => {
        Mailer();
        console.log('Running a task every day at 8:00 AM');
    });
}

module.exports = { Auto };
