import { withAuth } from '@clerk/nextjs/api'
import { NextApiResponse, NextApiRequest } from 'next'
import { ServerGetToken } from '@clerk/types'

//Interface example with Clerk
interface ClerkRequest extends NextApiRequest {
  auth: {
    userId?: string | null
    sessionId?: string | null
    getToken: ServerGetToken
  }
}

export default withAuth(async (req: ClerkRequest, res: NextApiResponse) => {
  const { sessionId, getToken } = req.auth

  if (!sessionId) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { offset } = req.query

  const response = await fetch(
    `https://us-east1-animated-bonsai-387322.cloudfunctions.net/get_cases?offset=${offset}`,
    {
      // @ts-ignore
      headers: {
        'Content-Type': 'application/json',
        'X-Token': await getToken(),
        'X-Session-Id': sessionId
      }
    }
  )

  if (!response.ok) {
    return res.status(response.status).json({
      message: `An error has occured: ${response.status}`
    })
  }

  const data = await response.json()

  return res.status(200).json({ data: data.data })
})
