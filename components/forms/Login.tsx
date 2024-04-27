import { Mail } from "lucide-react"
import Link from "next/link"
import React from "react"
import { AuthGoogle } from "@/components/Auth/auth-button-google"

const FormLogin = () => {
  return (
    <div className="z-30 flex w-full flex-col gap-5 md:pb-4">
      <div className="flex flex-col items-center gap-1 text-dark/90">
        <h2 className="text-2xl font-semibold">
          Inicia en{" "}
          <Link href="/" className="font-semibold text-purple">
            Chatizzí
          </Link>
        </h2>
      </div>

      <AuthGoogle className="mb-1 flex w-full items-center justify-between gap-2 rounded-lg border bg-white p-1 pe-4 text-sm font-semibold text-dark/80 duration-300 hover:border-dark/30" />

      <hr className="pb-2 opacity-20" />

      <div className="flex flex-col gap-4 text-dark">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Correo empresarial
          </label>
          <div className="relative flex items-center rounded-lg border bg-white p-2 duration-200 hover:border-purple/50 has-[input:focus]:border-purple/80">
            <input
              id="email"
              className="flex-grow bg-transparent pe-7 text-sm outline-none placeholder:text-dark/30 md:text-base"
              type="email"
              placeholder="email@company.com"
            />
            <Mail
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-dark/50"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button className="rounded-lg  border border-purple bg-purple p-2 text-sm font-medium text-white duration-200  hover:border-purple/60 hover:bg-purple/85">
          Empezar ahora
        </button>
        <Link
          href="/sign-up"
          className="rounded-lg border bg-white p-2 text-center text-sm font-medium text-dark/90 duration-300  hover:border-dark/30"
        >
          Regístrate gratis
        </Link>
      </div>
    </div>
  )
}

export default FormLogin
