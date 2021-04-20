import { Logo } from "@components/Logo"
import { FC } from "react"

interface FooterProps {
  background: string
  color: string
}

export const Footer: FC<FooterProps> = ({ background, color }) => {
  return (
    <footer style={{ background }}>
      <Logo color={color} />
    </footer>
  )
}