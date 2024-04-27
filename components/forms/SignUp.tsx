"use client"
import { Eye, EyeOff, Mail } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import Select from "@/components/selects/Select"

const FormSignUp = () => {
  const [password, setPassword] = useState(false)
  const handleSelectChange = (value: string) => {}

  const options = ["Cursos online", "HHRR", "Marketing", "Mensajeria"]
  return (
    <div className="flex max-w-xs flex-col gap-3 sm:max-w-sm md:px-0 md:pb-4 2xl:max-w-md">
      <div className="flex flex-col gap-1 text-dark">
        <h2 className="text-2xl font-semibold">Crea una cuenta</h2>
        <p className="text-sm font-normal">
          Comieza una prueba gratuita de 14 días con
          <Link href="/" className="font-semibold text-purple hover:underline">
            Chatizzí
          </Link>
          fácilmente.
        </p>
      </div>
      <button className="flex w-full items-center justify-between gap-2 rounded-lg bg-blue-500 p-1 pe-4 text-sm font-medium text-white duration-200  hover:bg-blue-600">
        <div className="rounded-md bg-white p-1.5">
          <svg
            width="17px"
            height="17px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                fill="#4285F4"
              ></path>
              <path
                d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                fill="#34A853"
              ></path>
              <path
                d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                fill="#EB4335"
              ></path>
            </g>
          </svg>
        </div>
        <span className="w-full">Continuar con Google</span>
      </button>

      <hr className="py-0.5" />

      <div className="flex flex-col gap-4 text-dark">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-dark/90">
            Correo empresarial
          </label>
          <div className="relative flex items-center rounded-lg border bg-white p-2 duration-200 hover:border-purple/60 has-[input:focus]:border-purple/80">
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

        <div className="flex flex-col gap-1">
          <div className="flex gap-3 text-dark/90">
            <label htmlFor="password" className="w-full text-sm font-medium">
              Contraseña
            </label>
            <label htmlFor="type" className="w-full text-sm font-medium">
              Tipo de trabajo
            </label>
          </div>
          <div className="w-full flex gap-2 justify-between">
            <div className="relative w-full flex items-center rounded-lg border bg-white p-2 duration-200 hover:border-purple/60 has-[input:focus]:border-purple/80">
              <input
                id="password"
                className="bg-transparent w-full pe-7 text-sm outline-none placeholder:text-dark/30 md:text-base"
                type={password ? 'text' : "password"}
                placeholder="*************"
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
            <Select options={options} onChange={handleSelectChange} />
          </div>
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
        <button className="flex w-full items-center justify-center gap-2 rounded-lg  bg-purple p-2 text-sm font-medium text-white duration-200  hover:bg-purple/85">
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
