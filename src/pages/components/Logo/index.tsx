import { FiBookOpen } from "react-icons/fi"
import { FC } from "react"

export const Logo: FC = () => {
  return (
    <section id="logo">
      <FiBookOpen size="32px" />
      
      <div className="text">
        <span>edu</span>
        <span>.</span>
        <span>co</span>
      </div>
    </section>
  )
}