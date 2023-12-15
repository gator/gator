import { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../components/emailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    organization,
    title,
    name,
    phone,
    email,
    comments
  } = req.body

  try {
    const data = await resend.emails.send({
      from: `${name} <hi@gator.sh>`,
      to: ['hi@gator.sh'],
      subject: `New Contact Form Submission: ${organization}`,
      react: EmailTemplate({
        organization,
        title,
        _name: name,
        phone,
        email,
        comments
      }),
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
