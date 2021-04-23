import { useRouter } from "next/router"

export default function curso() {
  const router = useRouter()

  const { slug } = router.query

  return (
    <>
      <h1>your route is: {slug}</h1>
    </>
  )
}