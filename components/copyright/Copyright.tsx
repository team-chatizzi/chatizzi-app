import Link from "next/link"
import React from "react"

const Copyright = () => {
  const currentYear = new Date().getFullYear()
  return (
    <p className="text-center text-sm text-dark/40 px-3">
      Copyright ©{" "}
      <b>
        <Link href="/">Chatizzí</Link>
      </b>{" "}
      {currentYear} <br />
      <b>
        {" "}
        <Link href="/privacy-policy">Política de privacidad</Link>
      </b>{" "}
      y{" "}
      <b>
        <Link href="/terms-service">Condiciones del servicio</Link>
      </b>
    </p>
  )
}

export default Copyright
