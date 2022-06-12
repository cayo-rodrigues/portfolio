import styled from "styled-components"
import { devices } from "../../styles/global"

interface ImgContainerProps {
  width?: string
  height?: string
  widthMobile?: string
  heightMobile?: string
}

export const ImgContainer = styled.img<ImgContainerProps>`
  width: ${(props) => props.widthMobile};
  height: ${(props) => props.heightMobile};

  @media ${devices.tablet} {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`
