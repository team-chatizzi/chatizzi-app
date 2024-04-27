import Copyright from '@/components/Copyright/Copyright'
import FormLogin from '@/components/Forms/Login'
import Logo from '@/components/Logo/Logo'
import React from 'react'

const LoginPage = () => {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-between gap-4 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple/20 via-slate-50 to-purple/20 bg-no-repeat px-2 py-5 md:justify-center">
      <div className="flex h-full w-full max-w-sm flex-col items-center justify-center gap-5 px-3">
        <Logo />
        <FormLogin />
      </div>
      <Copyright />
    </main>
  )
}

export default LoginPage
