import { useState, type ReactElement } from 'react'
import type { NextPageWithLayout } from '../../_app'
import DashboardLayout from '../../../components/dashboardLayout'
import { type GetServerSideProps } from 'next'
import SEO from '../../../components/seo'
import { withServerSideAuth } from '@clerk/nextjs/ssr'
import { CaseT } from '../../../types/case'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'

export const getServerSideProps: GetServerSideProps = withServerSideAuth(
  async ({ req }) => {
    const caseId = req.url?.split('/').pop()?.split('.')[0]

    const { sessionId, getToken } = req.auth

    if (!sessionId) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    // const response = await fetch(
    //   `https://us-east1-animated-bonsai-387322.cloudfunctions.net/get_cases?caseId=${caseId}`,
    //   {
    //     // @ts-ignore
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-Token': await getToken(),
    //       'X-Session-Id': sessionId
    //     }
    //   }
    // )

    // if (!response.ok) {
    //   return { props: { c: [] } }
    // }

    // const data = await response.json()

    const data = {
      data: {
        id: 'sNPC4FXNpzK6OJgWZS2r',
        differential_diagnosis: [
          { confidence: 0.6, diagnosis: 'Food poisoning' },
          { confidence: 0.2, diagnosis: 'Gastroenteritis' },
          { confidence: 0.1, diagnosis: 'Gastritis' },
          { confidence: 0.05, diagnosis: 'Viral gastroenteritis' },
          { confidence: 0.04, diagnosis: 'Gastric ulcer' }
        ],
        'icd-10 codes': [
          {
            code: 'A05.9',
            description: 'Bacterial foodborne intoxication, unspecified'
          }
        ],
        keywords: [
          'stomach pain',
          'throwing up',
          'diarrhea',
          'allergic',
          'food poisoning',
          'rest',
          'bread',
          'rice',
          'water',
          'sugar'
        ],
        note: `Chief Complaint: Terrible stomach\nHistory of Present Illness: Patient reports feeling unwell with vomiting since late last night after consuming seafood and pasta dish prepared by their children for their anniversary. No diarrhea present. No known allergies reported\nPast Medical History: Unknown\nFamily History: Unknown\nImaging: Unknown\nPhysical Exam: Unknown\nAssessment: Food poisoning\nPlan: Advise rest and avoid eating for the next 24 hours. After that time, patient can start with bread or rice but should avoid milk or cheese. Advise to drink plenty of water or black tea with sugar. Follow up in two days if condition does not improve. No further appointments required. Advise to visit a restaurant instead for their next anniversary celebration.\n`,
        rx: []
      }
    }

    return { props: { c: data.data } }
  },
  { loadUser: true }
)

const Case: NextPageWithLayout<{ c: CaseT }> = ({ c }) => {
  const [copied, setCopied] = useState(false)

  return (
    <>
      <SEO title={`Scribe Case ${c.id} - Gator`} />

      {/* back button */}
      <Link href='/dashboard/scribe' className='mt-20 ml-5 w-fit'>
        <div className='flex items-center'>
          <ChevronLeftIcon className='w-6 h-6' />
          <p className='text-lg'>Back</p>
        </div>
      </Link>

      <main className='pt-10'>
        <h1 className='text-xl font-bold text-center'>Case: {c.id}</h1>

        <h2 className='mt-10 font-bold'>Note</h2>
        <div className='flex'>
          <div>
            {c.note.split('\n').map((line, index) => (
              <p key={index}>
                {line}
                {index !== c.note.split('\n').length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </p>
            ))}
          </div>
          <div
            className='p-2 ml-2 rounded cursor-pointer bg-black/5 w-fit h-fit'
            data-tooltip={copied ? 'copied' : 'copy note'}
            onClick={() => {
              navigator.clipboard.writeText(c.note.replaceAll('\\n', '\n\n'))
              setCopied(true)
            }}
          >
            <FontAwesomeIcon
              icon={copied ? faCheck : faCopy}
              className='w-5 h-5'
            />
          </div>
        </div>

        <h2 className='mt-10 font-bold'>Keywords</h2>
        {c.keywords.length === 0 && <p>N/A</p>}
        {c.keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}

        <h2 className='mt-10 font-bold'>Generated Differential Diagnosis</h2>
        {c.differential_diagnosis.length === 0 && <p>N/A</p>}
        {c.differential_diagnosis.map((diagnosis, index) => (
          <li key={index}>
            {Number(diagnosis.confidence) * 100}% - {diagnosis.diagnosis}
          </li>
        ))}

        <h2 className='mt-10 font-bold'>Suggested ICD-10 Codes</h2>
        {c['icd-10 codes'].length === 0 && <p>N/A</p>}
        {c['icd-10 codes'].map((code, index) => (
          <li key={index}>
            {code.code} - {code.description}
          </li>
        ))}

        <h2 className='mt-10 font-bold'>Suggested Rx</h2>
        {c.rx.length === 0 && <p>N/A</p>}
        {c.rx.map((rx, index) => (
          <li key={index}>{rx}</li>
        ))}
      </main>
    </>
  )
}

Case.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Case
