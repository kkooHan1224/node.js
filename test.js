const nodemailer = require('nodemailer');
const email = {
    "host": "",
    "post": ""
}

const send = async (option) => {
    nodemailer.createTransport(email)
}