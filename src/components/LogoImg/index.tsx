import { ImgContainer } from "./styles"

interface LogoImgProps {
  src: string
  alt: string
  width?: string
  widthMobile?: string
  height?: string
  heightMobile?: string
}

const LogoImg = ({
  src,
  alt,
  height = "auto",
  width = "50%",
  heightMobile = height,
  widthMobile = width,
}: LogoImgProps) => {
  return (
    <ImgContainer
      src={src}
      alt={alt}
      width={width}
      height={height}
      widthMobile={widthMobile}
      heightMobile={heightMobile}
    />
  )
}

export default LogoImg
