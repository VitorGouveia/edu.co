import { Button } from "./components/Button"
import { Logo } from "./components/Logo"

export default function Home() {
  const themeColor = "#8257e6"

  return (
    <>
      <Logo 
        color={themeColor}
      />

      <Button 
        text="Veja mais cursos"
        href="/" 
        buttonType="button"
        color={themeColor}
      />
    </>
  )
}