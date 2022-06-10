import styled from "styled-components"
import { devices } from "../../styles/global"

export const AboutContainer = styled.section`
  padding: 5% 0;

  p {
    line-height: 1.5rem;
    color: var(--color-off-white);
    font-size: 0.9rem;
  }

  @media ${devices.laptop} {
    padding: 2% 0;

    p {
      font-size: 1rem;
    }
  }
`
