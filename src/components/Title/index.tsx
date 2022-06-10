import { ReactNode } from "react"

interface TitleProps {
  children?: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <>{children}</>
}

export default Title
