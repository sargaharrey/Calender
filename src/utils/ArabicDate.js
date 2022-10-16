import React from 'react'

export default function ArabicDate() {
  return (
    <div className='date'>{new Intl.DateTimeFormat('ar-FR-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())}</div>
  )
}
