import styled, { css } from "styled-components"
import { IContactIconContainerProps } from "../../interfaces/header"
import { devices } from "../../styles/global"

export const Container = styled.header`
  display: flex;
  justify-content: right;
  background: #1f1f1f;
`
export const ContactContainer = styled.div`
  width: fit-content;
  display: flex;
`

export const ContactIcon = styled.span<IContactIconContainerProps>`
  display: flex;
  justify-content: center;

  border: 1px solid var(--color-border-dark);
  border-radius: 0.6rem;

  margin: 5px;
  padding: 10px 20px;

  transition: var(--transition);
  cursor: pointer;

  :active {
    svg {
      transform: scale(0.9);
    }
  }

  ${(props) =>
    props.contactType === "linkedin"
      ? css`
          background: var(--color-linkedin);
          :hover {
            background: var(--color-linkedin-hover);
          }
        `
      : css`
          background: var(--color-github);
          :hover {
            background: var(--color-github-hover);
          }
        `};

  @media ${devices.tablet} {
    padding: 12px 24px;
  }
`
