import { Button } from "@components/Button"
import { Logo } from "@components/Logo"
import { Card } from "@components/Card"
import { GetServerSideProps } from "next"
import { prisma } from "../prisma"
import { Item } from "@prisma/client"
import { useEffect } from "react"
import { Footer } from "@components/Footer" 

interface HomeProps {
  items: Item[]
}

export default function Home({ items }: HomeProps) {
  const theme = {
    primary: "hsl(258, 74%, 62%)",
    primaryLight: "hsl(258, 100%, 70%)",
    primaryDark: "hsl(258, 90%, 60%)",
    primaryText: "#2e0098",
    secondaryText: "#fafafa",
    darkText: "hsl(272, 82%, 46%)"
  }

  useEffect(() => {
    window.localStorage.setItem("theme", "default")
  }, [])


  return (
    <>
      <header style={{ background: theme.primaryLight }}>
        <Logo color={theme.primary} />

        <article>
          <section>
            <h2>
              Aprender ficou mais fácil do que nunca
            </h2>

            <p style={{ color: theme.primaryText }}>O que você vai aprender hoje?</p>
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

        <section>
          {items.map(item => {
            return (
              <Card 
                key={item.id} 
                text={item.name} 
                img={item.img}
                background={theme.primary}
                color={theme.secondaryText}
              >
                <Button 
                  key={item.id}
                  text="Ver esse curso" 
                  color={theme.primaryLight}
                  href={`/cursos/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                  buttonType="button"
                />
              </Card>
            )
          })}
        </section>

        <article>
          <span style={{ color: theme.primaryText }} >"</span>
          <h4 style={{ color: theme.primaryText }} >Eu e o meu filho aprendemos muito com essa plataforma, recomendo muito, 10/10</h4>
          <span style={{ color: theme.primaryText }} >"</span>
        </article>
      </main>


      <Footer
        background={theme.primaryDark}
        color={theme.primaryLight}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // await prisma.item.deleteMany()
  await prisma.item.create({
    data: {
      name: "Banco de Dados",
      img: "https://img.icons8.com/ios/452/database.png"
    }
  }) 


  const items = await prisma.item.findMany({ 
    take: 6
  })
  
  return {
    props: {
      items
    }
  }
}