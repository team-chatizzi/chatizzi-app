import Copyright from '@/components/Copyright/Copyright'
import FormSignUp from '@/components/Forms/SignUp'
import Logo from '@/components/Logo/Logo'
import Welcome from "@/app/assets/svgs/welcome.svg"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-screen bg-slate-50">
      <div className="z-30 flex w-full flex-col items-center justify-between border-e bg-white py-5">
        <div className="flex h-full flex-col justify-center px-3 gap-5">
          <div className="block md:hidden">
            <Logo name="Chatizzí" />
          </div>
          <FormSignUp />
        </div>
        <Copyright />
      </div>
      <div className="relative hidden h-full w-full flex-col items-center justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple/20 via-slate-50 to-purple/20 bg-no-repeat px-5 md:flex">
        <div className="flex flex-col gap-3">
          <Logo />
          <div className="text-dark">
            <h2 className="text-xl font-medium">
              Bienvenido a{" "}
              <Link href="/" className="font-semibold text-purple">
                Chatizzí
              </Link>
            </h2>
            <p className="">
              Estás un paso más cerca del crecimiento exponencial
            </p>
          </div>
          <Image
            src={Welcome}
            alt="Dashboard"
            width={350}
            height={350}
            className="xl:w-4/5"
          />
        </div>
      </div>
    </main>
  )
}

export default SignUpPage
