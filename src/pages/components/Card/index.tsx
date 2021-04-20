import { FC } from "react"

interface CardProps {
  text: string
  img: string
}

export const Card: FC<CardProps> = ({ text, img, children }) => {
  return (
    <>
      <div id="card">
        <p>{text}</p>
        <div className="img-zoom">
          <img src={img} height="132px" width="132px" />
        </div>
        {children}
      </div>
    </>
  )
}