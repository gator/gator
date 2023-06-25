export type CaseT = {
  id: string
  datetime: string
  transcript: { duration: number, sentance: string }[]
  note: string
  keywords: string[]
  'icd-10 codes': { code: string, description: string }[]
  rx: string[]
  summary: string
}
