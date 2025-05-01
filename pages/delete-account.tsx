// ✅ src/pages/delete-account.tsx (Next.js + TS)

import Head from 'next/head'
import React from 'react'

export default function DeleteAccountPage() {
  return (
    <>
      <Head>
        <title>Delete Account | TFED Tennis Club</title>
      </Head>
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Delete Your Account</h1>

        <p>
          If you would like to delete your TFED Club account and associated personal data,
          simply click the button below. This action is irreversible and will be processed within 7 days.
        </p>

        <button
          style={{
            backgroundColor: '#2f516b',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            margin: '1.5rem 0',
          }}
          onClick={() => window.location.href = 'mailto:tennis.fedotov@gmail.com?subject=Request to Delete Account'}
        >
          Request Account Deletion
        </button>

        <h2>What Will Be Deleted</h2>
        <ul>
          <li>Your personal profile and login credentials</li>
          <li>Training history and session data</li>
          <li>Any stored payment and package information</li>
        </ul>

        <p><strong>Retention:</strong> Basic non-identifiable statistics may be retained for analytics and performance tracking.</p>

        <h2>Contact</h2>
        <p>If you have questions, please contact us at <a href="mailto:tennis.fedotov@gmail.com">tennis.fedotov@gmail.com</a>.</p>
      </main>
    </>
  )
}