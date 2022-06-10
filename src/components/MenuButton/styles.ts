import styled from "styled-components"

export const Container = styled.button`
  background: none;
  border: 0;
  border-bottom: 3px solid transparent;
  padding: 5px 12px;
  flex: 1;
  text-transform: uppercase;

  transition: var(--transition);

  &:hover {
    border-bottom: 3px solid var(--color-highlight);
  }
`
