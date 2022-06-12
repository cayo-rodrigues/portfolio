import styled from "styled-components"
import { devices } from "../../styles/global"

export const Container = styled.section`
  display: flex;
  justify-content: center;
`

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
    gap: 3%;
    flex-wrap: wrap;

    li {
      width: 48.5%;
    }
  }
`
