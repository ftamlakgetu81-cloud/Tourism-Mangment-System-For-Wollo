import { useState } from 'react'
import Navbar from '../components/Navbar'
import {
  FaArrowRight,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaSignInAlt,
  FaUser,
} from 'react-icons/fa'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    if (email.trim().toLowerCase() === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('wollo-admin-session', 'true')
      window.location.href = '/admin'
      return
    }

    setLoginMessage('Invalid email or password.')
  }

  const handleProviderLogin = (provider) => {
    setLoginMessage(`${provider} sign-in is not connected yet.`)
  }

  return (
    <>
      <Navbar />
      <main className="relative isolate flex min-h-[calc(100svh-100px)] flex-col items-center justify-center gap-6 overflow-hidden bg-[#183e4e] px-4 pb-8 pt-[100px] text-slate-800 sm:gap-8 lg:flex-row lg:gap-12 lg:px-10 xl:justify-between xl:gap-8 xl:pl-16 xl:pr-[500px]">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=85"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#062d35]/55 via-[#0d5161]/20 to-[#082f4a]/35" />

        <div className="hero-enter relative z-10 w-full max-w-[440px] text-center text-white lg:max-w-2xl lg:text-left">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-sky-200 sm:mb-4 sm:text-sm sm:tracking-[0.28em]">
              Explore · Discover · Experience
            </p>
            <h1 className="text-[clamp(1.7rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight drop-shadow-lg">
              Tourism Management System
              <span className="mt-1 block text-sky-300">For South Wollo</span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/90 drop-shadow sm:mt-4 sm:text-base lg:mx-0">
              Discover the landscapes, culture, and heritage of South Wollo.
            </p>
          </div>
        </div>

        <section className="relative z-10 w-full max-w-[440px] shrink-0 rounded-2xl border border-white bg-white/95 p-[25px] shadow-[0_18px_55px_rgba(24,91,132,0.14)] backdrop-blur">
          <header className="mb-5 flex items-center gap-4">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-sky-100 text-3xl text-[#1266a0]">
            <FaUser aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold leading-tight text-[#123c82] sm:text-3xl">Welcome Back</h1>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">Log in to your account and continue your travel journey in South Wollo.</p>
          </div>
          </header>

          <form onSubmit={handleLogin} className="space-y-3.5">
          <div className="relative">
            <FaEnvelope aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#24608e]" />
            <input
              id="login-email"
              type="text"
              inputMode="email"
              autoComplete="username"
              required
              placeholder="Email or Phone Number"
              aria-label="Email or Phone Number"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-12 w-full rounded-2xl border border-sky-200 bg-white pl-14 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-50"
            />
          </div>

          <div className="relative">
            <FaLock aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#24608e]" />
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              required
              placeholder="Password"
              aria-label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-12 w-full rounded-2xl border border-sky-200 bg-white pl-14 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-50"
            />
            <button
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              title={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-lg text-[#24608e] hover:text-sky-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex justify-end pt-0.5">
            <a href="#forgot" className="text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline">Forgot Password?</a>
          </div>

          {loginMessage && (
            <p role="status" className="rounded-lg bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-900">
              {loginMessage}
            </p>
          )}

          <button
            type="submit"
            className="relative inline-flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#0879bd] to-[#11b7db] px-12 text-base font-bold text-white shadow-md shadow-sky-900/15 transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-sky-100"
          >
            <FaSignInAlt aria-hidden="true" className="absolute left-6 text-xl" />
            Log In
            <FaArrowRight aria-hidden="true" className="absolute right-6 text-xl" />
          </button>
          </form>

          <div className="my-4 flex items-center gap-4">
          <span className="h-px flex-1 bg-sky-200" />
          <span className="text-xs font-medium text-slate-500">OR</span>
          <span className="h-px flex-1 bg-sky-200" />
          </div>

          <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleProviderLogin('Google')}
            className="inline-flex h-12 w-full items-center gap-4 rounded-2xl border border-sky-200 bg-white px-5 text-left text-sm font-semibold text-slate-600 transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-50"
          >
            <FaGoogle aria-hidden="true" className="text-xl text-[#4285f4]" />
            Continue with Google
          </button>
          <button
            type="button"
            onClick={() => handleProviderLogin('Facebook')}
            className="inline-flex h-12 w-full items-center gap-4 rounded-2xl border border-sky-200 bg-white px-5 text-left text-sm font-semibold text-slate-600 transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-50"
          >
            <FaFacebookF aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-full bg-[#1877f2] p-1.5 text-white" />
            Continue with Facebook
          </button>
          </div>

          <p className="mt-5 text-center text-xs text-slate-500">
          New to South Wollo? <a href="/register" className="font-bold text-sky-700 hover:underline">Create an account</a>
          </p>
        </section>
      </main>
    </>
  )
}
