import { FiBookOpen } from "react-icons/fi"

export const Logo = ({ color }) => {
  return (
    <section id="logo">
      <FiBookOpen color={color} size="24px" />
      <span>edu</span>
      <span style={{ color }}>.</span>
      <span>co</span>
    </section>
  )
}