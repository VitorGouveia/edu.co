import Head from "next/head"

export const HeadConfig = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
  )
}