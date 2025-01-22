var nodemailer = require('nodemailer');

const Mailer = (req,res) => {

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Gmail's SMTP host
        port: 587, // SMTP port for STARTTLS
        secure: false,
        auth: {
          user: 'noreply.autobat@gmail.com',
          pass: 'rboe jrfa ogaf pzzc'
        }
    })
    const quotes = [
        "Freedom is the right of all sentient beings.",
        "In any war, there are calms between storms",
        "One shall stand, one shall fall.",
        "I will accept the burden with all that I am.",
        "From its lessons, the future is forged.",
        "There’s a thin line between being a hero and being a memory.",
        "Before time began, there was the Cube. We know not where it comes from, only that it holds the power to create worlds and fill them with life. That is how our race was born."
    ];

    const mailOptions = {
        from: 'noreply.autobat@gmail.com',
        to: 'agilan.2020aids@sece.ac.in,ranjith.r2020aids@sece.ac.in,ajay.a2020aids@sece.ac.in,harishragevendran.n2020aids@sece.ac.in,harish.g2020aids@sece.ac.in,vasanth.g2020aids@sece.ac.in,santhosh.m2020aids@sece.ac.in,farhanahmedkhan.a2020aids@sece.ac.in,surendra.p2020aids@sece.ac.in',
        subject: "Autobots!",
        text: quotes[Math.floor(Math.random() * quotes.length)]
    };
      try {
        transporter.sendMail(mailOptions, function(error, info){
            console.log(mailOptions);
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          
          res?.status(200)?.json({
            data: "Email sent"
          });
      }
      catch (error) {
        console.log(error);
      }
      
}

module.exports = {
    Mailer
}