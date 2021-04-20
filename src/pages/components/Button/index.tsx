import { FiBookOpen } from "react-icons/fi"
import Link from "next/link"
import { useState } from "react"
import { FC } from "react"

interface ButtonProps {
  text: string
  buttonType: "button" | "submit" | "reset"
  href: string
  color: string
}

export const Button: FC<ButtonProps> = ({ text, buttonType, href, color }) => {
  const [isLoading, setLoading] = useState(false)

  function load() {
    setLoading(!isLoading)
  }

  return (
    <>
      <button 
        style={{ background: color }} 
        type={buttonType}
        onClick={() => load()}
        className={isLoading ? "loading": null}
      >

        <span>
          <Link href={href}>
            {text}
          </Link>
        </span>

        <span>
          <FiBookOpen size="24px" />
        </span>
      </button>
    </>
  )
}