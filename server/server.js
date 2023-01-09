import express from 'express'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const sendMail = async (subject, message, send_to, send_from, reply_to) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const options = {
        from: send_from,
        to: send_to,
        reply_to: reply_to,
        subject: subject,
        html: message
    }

    transporter.sendMail(options, function (err, info) {
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
}
const sendMessage = async (req, res) => {
    const {name, email, message} = req.body
    if(!email || !name || !message){
        res.send("Please Input all required fields")
    }

    const finalMessage = `
    <h2 style='text-align: center'>Hello Justine</h2>
    <h2 style='text-align: center'>You have a message from ${name}</h2>
    <p>sender email: ${email}</p>
    <h3>${message}</h3>
    `

    try {
        await sendMail(`${name} email you`, finalMessage, 'justinejeraldbaliguat@gmail.com', 'cam2ne@cam2netict.net')
        res.status(200).json({success: true, message: "Your message has been sent thank you."})
    } catch (error) {
        res.status(500)
        throw new Error("Email not sent, please try again")
    }
}

const app = express()
app.get('/api/sendsms', sendMessage)

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    console.log(`Server Running On Port ${PORT}`)
})

