import styled from "styled-components"
import { devices } from "../../styles/global"

interface TitleContainerProps {
  fontSize: string
  fontWheight: number
  fontSizeMobile?: string
  fontWheightMobile?: number
}

export const TitleContainer = styled.div<TitleContainerProps>`
  font-family: var(--font-title);

  font-size: ${(props) => props.fontSizeMobile};
  font-weight: ${(props) => props.fontWheightMobile};

  @media ${devices.tablet} {
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWheight};
  }
`
