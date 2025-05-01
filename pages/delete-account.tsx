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
          If you would like to delete your TFED Club account and associated personal data, please follow the
          steps below. This action is irreversible.
        </p>

        <h2>Step-by-Step Instructions</h2>
        <ol>
          <li>Open the TFED Club mobile application.</li>
          <li>Navigate to <strong>Profile</strong> → <strong>Settings</strong> → <strong>Account</strong>.</li>
          <li>Tap on <strong>Request Account Deletion</strong>.</li>
          <li>Confirm your request. We will process the deletion within 7 days.</li>
        </ol>

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