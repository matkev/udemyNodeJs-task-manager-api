const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matthew.kevork@hotmail.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'matthew.kevork@hotmail.com',
        subject: 'Sorry to see you go',
        text: "You're better off without us"
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}