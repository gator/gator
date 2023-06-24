export type CaseT = {
  id: string
  datetime: string
  transcript: string
  note: string
  keywords: string[]
  'icd-10 codes': { code: string, description: string }[]
  rx: string[]
  summary: string
}
