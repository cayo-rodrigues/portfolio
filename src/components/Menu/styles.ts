import styled from "styled-components"
import { devices } from "../../styles/global"

export const NavContainer = styled.nav`
  border-bottom: 1px solid var(--color-dark-gray);
  display: flex;

  position: sticky;
  top: 0;
  background: var(--color-bg);

  @media ${devices.laptop} {
    position: relative;
  }
`
