

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'demomailtrap.com',
    port: 465,
    secure: true,
    auth: {
        user : 'smtp@mailtrap.io',
        pass : '56b021a3db61a2219712c2dd2c612ab7',
    },
    service: 'gmail',
    debug: true,
    logger: true
})

const mailOptions = {
    from: 'ajay@gmail.com',
    to: 'ajay2112003@gmail.com',
    subject: 'hii',
    text: 'hello mail txt'
}

transporter.sendMail(mailOptions, function(error,info){
    console.log('hii from line 23');
    console.log(error? error : info?.response);
});

// const sendMail = async (req, res) => {
//     try{
//         transporter.sendMail(mailOptions, function(error,info){
//             console.log(error? error : info?.response);
//         });
//     }
//     catch(error) {
//         console.log('Log error : ',error);
//     }
    
// }

// module.exports = { sendMail };