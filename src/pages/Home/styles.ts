import styled from "styled-components"
import { devices } from "../../styles/global"

export const Container = styled.div`
  padding: 10%;
  display: flex;

  @media ${devices.tablet} {
    padding: 7% 10%;
  }

  @media ${devices.laptop} {
    padding: 5% 10%;
  }
`

export const MainContainer = styled.main`
  flex: 1.25;
`

export const AsideContainer = styled.aside`
  display: none;
  flex: 1;
  @media ${devices.laptop} {
    display: unset;
  }
`
