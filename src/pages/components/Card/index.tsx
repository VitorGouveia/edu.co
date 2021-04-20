import { FC } from "react"

interface CardProps {
  text: string
  img: string
  background: string
  color: string
  children: any
}

export const Card: FC<CardProps> = ({ text, img, background, color, children }) => {
  return (
    <>
      <div id="card" style={{ background, color }} >
        <p>{text}</p>
        <div className="img-zoom">
          <img src={img} height="132px" width="132px" />
        </div>
        {children}
      </div>
    </>
  )
}