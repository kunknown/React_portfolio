//require
const nodemailer = require('nodemailer');
const transporterConfig = require('../transporterConfig');

//transporter
const transporter = nodemailer.createTransport(transporterConfig);

//export
module.exports = (app) => {
  app.post('/api/contact/send', (req, res) => {
    const {firstName, lastName, email, message} = req.body;
    const mailOptions = {
      from: email,
      to: transporterConfig.auth.user,
      subject: `${firstName} ${lastName}`,
      text: message
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if(err) {
        console.log(err);
        res.send('The email was not delivered, please try again.');
      }
      else {
        res.send('The email has been delivered.');
      }
    })
  });
};