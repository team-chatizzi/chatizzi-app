"use client"
import { Eye, EyeOff, Mail } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
// import Select from "@/components/Selects/Select"
import { AuthGoogle } from "../Auth/auth-button-google"

const FormSignUp = () => {
  const [password, setPassword] = useState(false)
  // const handleSelectChange = (value: string) => { }

  // const options = ["Cursos online", "HHRR", "Marketing", "Mensajeria"]
  return (
    <div className="flex max-w-xs flex-col gap-3 sm:max-w-sm md:px-0 md:pb-4 2xl:max-w-md">
      <div className="flex flex-col gap-1 text-dark">
        <h2 className="text-2xl font-semibold">Crea una cuenta</h2>
        <p className="text-sm font-normal">
          Comieza una prueba gratuita de 14 días con {" "}
          <Link href="/" className="font-semibold text-purple hover:underline">
            Chatizzí
          </Link>
          {" "} fácilmente.
        </p>
      </div>
      <AuthGoogle className="mb-1 flex w-full items-center justify-between gap-2 rounded-lg border border-blue-600 bg-blue-600 p-1 pe-4 text-sm font-semibold text-white duration-300 hover:border-dark/30 hover:border-blue-500 hover:bg-blue-500" />

      <hr className="py-0.5" />

      <div className="flex flex-col gap-4 text-dark">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-dark/90">
            Correo
          </label>
          <div className="relative flex items-center rounded-lg border bg-white p-2 duration-200 hover:border-purple/60 has-[input:focus]:border-purple/80">
            <input
              id="email"
              className="flex-grow bg-transparent pe-7 text-sm outline-none placeholder:text-dark/30 md:text-base"
              type="email"
              placeholder="email@gmail.com"
            />
            <Mail
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform text-dark/50"
            />
          </div>
        </div>

        <div className="flex gap-1">
          <div className="flex flex-col gap-1 w-full">
            <div className="flex gap-3 text-dark/90">
              <label htmlFor="password" className="w-full text-sm font-medium">
                Contraseña
              </label>
            </div>
            <div className="w-full flex gap-2 justify-between">
              <div className="relative w-full flex items-center rounded-lg border bg-white p-2 duration-200 hover:border-purple/60 has-[input:focus]:border-purple/80">
                <input
                  id="password"
                  className="bg-transparent w-full pe-7 text-sm outline-none placeholder:text-dark/30 md:text-base"
                  type={password ? 'text' : "password"}
                  placeholder="••••••••••••••"
                />
                {password
                  ? (
                    <Eye
                      onClick={() => { setPassword(false) }}
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-dark/50"
                    />
                    )
                  : (
                    <EyeOff
                      onClick={() => { setPassword(true) }}
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-dark/50"
                    />
                    )}
              </div>

            </div>
          </div>
          {/* <Select options={options} onChange={handleSelectChange} /> */}
        </div>

        <div className="flex gap-2">
          <label
            className="relative flex h-fit cursor-pointer rounded-full "
            htmlFor="terms"
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              className=" border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:block before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-indigo-500 checked:bg-indigo-500 checked:before:bg-indigo-500"
              id="terms"
            />
            <div className="pointer-events-none absolute left-2/4 top-2.5 h-fit -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
          <label htmlFor="terms" className="text-sm">
            Acepto las condiciones y la política de privacidad.
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg  bg-purple p-[10px] text-sm font-medium text-white duration-200  hover:bg-purple/85">
          Empezar ahora
        </button>
      </div>

      <hr className="py-0.5" />

      <div className="flex gap-2 text-sm text-dark">
        ¿Ya tienes una cuenta?
        <Link
          className="font-medium text-purple/80 duration-200 hover:text-purple"
          href="/login"
        >
          Iniciar sesión
        </Link>
      </div>
    </div>
  )
}

export default FormSignUp
