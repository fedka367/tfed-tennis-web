// ✅ src/pages/privacy-policy.tsx (Next.js + TS)

import Head from 'next/head'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TFED Tennis Club</title>
      </Head>
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> April 6, 2025</p>

        <p>
          This Privacy Policy describes our policies and procedures on the collection, use and disclosure
          of your information when you use the Service. We use your personal data to provide and improve
          the Service. By using the Service, you agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>

        <h2>Definitions</h2>
        <ul>
          <li><strong>Account:</strong> unique account to access the Service.</li>
          <li><strong>Application:</strong> TFED mobile application.</li>
          <li><strong>Company:</strong> TFED Tennis Club FZCO, Office #123, JLT, Dubai, UAE.</li>
          <li><strong>Country:</strong> United Arab Emirates.</li>
          <li><strong>Device:</strong> any device that accesses the Service.</li>
          <li><strong>Personal Data:</strong> information related to an identified individual.</li>
        </ul>

        <h2>Collecting and Using Personal Data</h2>
        <ul>
          <li>Email address</li>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Usage data</li>
        </ul>

        <h2>Third-Party Logins</h2>
        <p>
          We support logging in via Google, Facebook, Apple, etc. We may receive basic profile info from these services.
        </p>

        <h2>Use of Data</h2>
        <ul>
          <li>To provide and maintain the service</li>
          <li>To manage your account</li>
          <li>To contact you via email or notifications</li>
          <li>To send marketing offers (if opted in)</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Security</h2>
        <p>We use industry-standard security measures, but cannot guarantee absolute protection.</p>

        <h2>Children's Privacy</h2>
        <p>Our app is not intended for users under the age of 13.</p>

        <h2>External Links</h2>
        <p>We may link to external websites; we are not responsible for their policies.</p>

        <h2>Contact</h2>
        <p>
          Questions? Email us at: <a href="mailto:tennis.fedotov@gmail.com">tennis.fedotov@gmail.com</a>
        </p>
      </main>
    </>
  )
}