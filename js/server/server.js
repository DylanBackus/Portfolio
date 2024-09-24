const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your-sendgrid-api-key');

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'your-email@gmail.com',  // Your receiving email address
    from: email,  // Sender address (from the contact form)
    subject: `New message from ${name}`,
    text: message,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send('Email sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.send('Error sending email');
    });
});
