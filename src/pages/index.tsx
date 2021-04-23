import { Button } from "@components/Button"
import { Logo } from "@components/Logo"
import { Card } from "@components/Card"
import { GetServerSideProps } from "next"
import { prisma } from "../prisma"
import { Item } from "@prisma/client"
import { useEffect } from "react"
import { Footer } from "@components/Footer" 
import { HeadConfig } from "./headConfig"

interface HomeProps {
  items: Item[]
}

export default function Home({ items }: HomeProps) {
  useEffect(() => {
    window.localStorage.setItem("theme", "omni")
  
    document.body.classList.add(localStorage.getItem("theme"))
  })


  return (
    <>
      <HeadConfig title="home" />
      <header>
        <Logo />

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
                img={item.img}>
                  
                <Button 
                  key={item.id}
                  text="Ver esse curso"
                  href={`/cursos/${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                  buttonType="button"
                />
              </Card>
            )
          })}
        </section>

        <article>
          <span>"</span>
          <h4>Eu e o meu filho aprendemos muito com essa plataforma, recomendo muito, 10/10</h4>
          <span>"</span>
        </article>
      </main>


      <Footer />
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