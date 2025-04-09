import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function ResetPasswordPage() {
  const router = useRouter()

  const [accessToken, setAccessToken] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Парсим hash-фрагмент (после "#") только в браузере
    if (typeof window !== 'undefined') {
      const hash = window.location.hash // например: "#access_token=abc123&expires_at=..."
      if (hash) {
        const params = new URLSearchParams(hash.substring(1)) // убираем '#'
        const token = params.get('access_token')
        if (token) {
          setAccessToken(token)
        } else {
          setError('No access token in URL hash')
        }
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setError('')

    if (!accessToken) {
      setError('Invalid access token.')
      return
    }

    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://tfed-backend.onrender.com/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`, // берем из state
        },
        body: JSON.stringify({
          oldPassword: 'placeholder', // зависит от вашего бэкенда
          newPassword,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result?.message || 'Something went wrong.')
      } else {
        setMessage('Password changed successfully. You may now log in.')
      }
    } catch (err) {
      console.error('Password reset error:', err)
      setError('Unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Reset Your Password</title>
      </Head>
      <div style={styles.container}>
        <h1 style={styles.title}>Reset Password</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        {message && <p style={styles.success}>{message}</p>}
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#0b1d30',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    padding: '0.8rem 1rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.9rem',
    fontSize: '1rem',
    backgroundColor: '#2f516b',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  error: {
    color: 'tomato',
    marginTop: '1rem',
  },
  success: {
    color: 'limegreen',
    marginTop: '1rem',
  },
}