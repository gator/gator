import * as React from 'react'

interface EmailTemplateProps {
  organization: string
  title: string
  _name: string
  phone: string
  email: string
  comments: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  organization,
  title,
  _name,
  phone,
  email,
  comments
}) => (
  <div>
    <p>Organization: {organization}</p>
    <br />
    <p>Title: {title}</p>
    <br />
    <p>Name: {_name}</p>
    <br />
    <p>Phone: {phone}</p>
    <br />
    <p>Email: {email}</p>
    <br />
    <p>Comments: {comments}</p>
  </div>
)
