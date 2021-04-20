import { FiBookOpen } from "react-icons/fi"
import { FC } from "react"

interface LogoProps {
  color: string
}

export const Logo: FC<LogoProps> = ({ color }) => {
  return (
    <section id="logo">
      <FiBookOpen color={color} size="32px" />
      
      <div className="text">
        <span>edu</span>
        <span style={{ color }}>.</span>
        <span>co</span>
      </div>
    </section>
  )
}