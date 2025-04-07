// ✅ src/pages/support.tsx (Next.js + TS)

import Head from 'next/head'
import React from 'react'

export default function Support() {
  return (
    <>
      <Head>
        <title>Support | TFED Tennis Club</title>
      </Head>
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Customer Support</h1>
        <p>If you have any questions, issues, or need help, please contact us:</p>
        <p>Email: <a href="mailto:tennis.fedotov@gmail.com">tennis.fedotov@gmail.com</a></p>
      </main>
    </>
  )
}
