import Head from "next/head"
import { FC } from "react"

interface HeadConfigProps {
  title: "home" | "cursos" | "login"
}

export const HeadConfig: FC<HeadConfigProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
  )
}