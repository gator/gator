// import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const r = searchParams.get('r')
  const url = r ? r : '/login'

  return Response.redirect(url)
}