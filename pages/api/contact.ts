import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2
// create reusable transporter object using the default SMTP transport

// send mail with defined transport object

const oauth2Client = new OAuth2(
    '83532624923-7a9blokbrmt4fibkl9bvormufs3ohcc5.apps.googleusercontent.com',
    'T2LaJaVlvC-ojQHishdzm9Wm', // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
)

oauth2Client.setCredentials({
    refresh_token:
        '1//04qrrHXiPfWKDCgYIARAAGAQSNwF-L9IrAb3BCaOAalKQnJWAOM00_x_fGCo2kM70xIgLNd3fKBZZA7SGgvqouS6rKAMaXkG-wJ8',
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
                    '83532624923-7a9blokbrmt4fibkl9bvormufs3ohcc5.apps.googleusercontent.com',
                clientSecret: 'T2LaJaVlvC-ojQHishdzm9Wm',
                refreshToken:
                    '1//04qrrHXiPfWKDCgYIARAAGAQSNwF-L9IrAb3BCaOAalKQnJWAOM00_x_fGCo2kM70xIgLNd3fKBZZA7SGgvqouS6rKAMaXkG-wJ8',
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
