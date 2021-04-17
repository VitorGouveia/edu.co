import { Logo } from "@components/Logo"

export const Footer = ({ background, color }) => {
  return (
    <footer style={{ background }}>
      <Logo color={color} />
    </footer>
  )
}