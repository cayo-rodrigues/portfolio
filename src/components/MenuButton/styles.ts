import styled from "styled-components"
import { devices } from "../../styles/global"

export const Container = styled.button`
  background: none;
  border: 0;
  border-bottom: 3px solid transparent;
  padding: 16px 12px;
  flex: 1;
  text-transform: uppercase;

  transition: var(--transition);

  &:hover {
    border-bottom: 3px solid var(--color-highlight);
  }

  @media ${devices.laptop} {
    padding: 5px 12px;
  }
`
