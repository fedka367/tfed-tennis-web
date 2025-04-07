import React from 'react'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>TFED Tennis Club</title>
        <meta name="description" content="TFED Tennis Club Coming Soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.container}>
        <h1 style={styles.title}>TFED Tennis Club</h1>
        <p style={styles.subtitle}>Website coming soon...</p>
      </main>
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.7,
  },
}