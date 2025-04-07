import React from 'react'
import Head from 'next/head'

export default function Reset() {
  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#111',
        color: '#fff',
        flexDirection: 'column'
      }}>
        <h1 style={{ fontSize: '2rem' }}>Reset Password</h1>
        <p>This is a placeholder reset screen for Supabase link.</p>
      </div>
    </>
  )
}