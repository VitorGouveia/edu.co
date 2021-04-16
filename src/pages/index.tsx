import { Button } from "./components/Button"
import { Logo } from "./components/Logo"

export default function Home() {
  const theme = {
    primary: "#8257e6",
    primaryLight: "#9466ff"
  }

  return (
    <>
      <header style={{ background: theme.primaryLight }}>
        <Logo color={theme.primary} />

        <article>
          <section>
            <h2>
              Aprender ficou mais fácil do que nunca
            </h2>

            <p>O que você vai aprender hoje?</p>
          </section>

          <Button
            text="Veja todos os cursos"
            href="/cursos"
            buttonType="button"
            color={theme.primary}
          />
        </article>  
      </header>

      <main>
        <h1>Apenda o que quiser</h1>
      </main>
    </>
  )
}