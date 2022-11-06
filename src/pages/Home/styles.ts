import styled from "styled-components"
import { devices } from "../../styles/global"

export const Container = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
  }

  @media ${devices.tablet} {
    padding: 7% 10%;
  }

  @media ${devices.laptop} {
    padding: 5% 10%;
  }
`

export const MainContainer = styled.main`
  flex: 2;
`

export const AsideContainer = styled.aside`
  display: none;
  flex: 1;

  @media ${devices.laptop} {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    img {
      width: 80%;
      position: sticky;
      top: 8%;
      margin-right: -10%;
    }
  }

  @media ${devices.laptopXL} {
    flex: 0.75;
  }
`

export const FooterContainer = styled.footer``
