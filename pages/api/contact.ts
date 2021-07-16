import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2
// create reusable transporter object using the default SMTP transport

// send mail with defined transport object

const oauth2Client = new OAuth2(
     process.env.CLIENT_ID,
     process.env.CLIENT_SECRET, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
)

oauth2Client.setCredentials({
    refresh_token:
        process.env.REFRESH_TOKEN,
})
const accessToken = oauth2Client.getAccessToken()
interface Payload {
    subject: string
    name: string
    email:string
    message: string
}
export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { subject, name, email, message } : Payload = req.body

    if (!subject || !name || !email || !message) {
        return res.send(false)
    }
    try {

        const transporter = nodemailer.createTransport({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'alejandro.velazco@correo.unimet.edu.ve',
                clientId:
                process.env.CLIENT_ID,
                clientSecret:  process.env.CLIENT_SECRET,
                refreshToken:
                    process.env.REFRESH_TOKEN,
                accessToken: accessToken, // generated ethereal user
            },
        })
        transporter.sendMail({
            from: `"${name} 👻" ${email}`, // sender address
            to: 'alejandro.velazco@correo.unimet.edu.ve', // list of receivers
            subject, // Subject line // plain text body
            html: `
            <div style="height:20rem; display:flex; flex:1; align-items:center; justify-content:center; border:solid 1px #fff;" >
             <p style="padding:1rem;" > EMAIL : ${email}  </p> 
             <p style="padding:1rem;"> NAME : ${name}  </p> 
             <p style="padding:1rem;"> SUBJECT : ${subject}  </p> 
             <p style="padding:1rem;"> MESSAGE : ${message}  </p> 
             </div>`, // html body
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        },  // @ts-ignore
            ({ message }) => { console.log('Message sent: %s', message) })
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        transporter.close()
        return res.send(true)
    } catch (err) {
        return res.send(false)
    }
}
