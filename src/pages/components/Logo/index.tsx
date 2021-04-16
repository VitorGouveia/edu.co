import { FiBookOpen } from "react-icons/fi"

export const Logo = ({ color }) => {
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