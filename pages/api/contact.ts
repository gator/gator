import { NextApiRequest, NextApiResponse } from 'next'
import { auth, sheets } from '@googleapis/sheets'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    company,
    title,
    first_name,
    last_name,
    phone,
    email,
    solutions,
    comments
  } = req.body

  const client = await auth.getClient({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: (process.env.GOOGLE_PRIVATE_KEY as string).replace(
        /\\n/g,
        '\n'
      )
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  })

  const sheetsAPI = sheets({
    version: 'v4',
    auth: client
  })

  const response = await sheetsAPI.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_CONTACT_ID,
    range: 'A2:I2',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          new Date().toUTCString(),
          company,
          title,
          first_name,
          last_name,
          phone,
          email,
          solutions,
          comments
        ]
      ]
    }
  })

  if (response.status !== 200) return res.status(500).end()

  return res.status(200).end()
}
