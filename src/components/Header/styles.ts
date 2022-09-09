import styled, { css } from "styled-components"
import { IContactIconContainerProps } from "../../interfaces/header"
import { ILangButtonProps } from "../../interfaces/lang"
import { devices } from "../../styles/global"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background: #1f1f1f;
`
export const ContactContainer = styled.div`
  width: fit-content;
  display: flex;
`

export const LangsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const LangButton = styled.button<ILangButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.3rem;

  margin: 5px;
  padding: 10px 20px;

  transition: var(--transition);
  cursor: pointer;

  ${(props) =>
    props.selected
      ? css`
          color: var(--color-black);
          background: var(--color-off-white);
          border: 1px solid var(--color-black);
          box-shadow: inset 0px 0px 3px var(--color-black);

          :hover {
            box-shadow: inset 0px 0px 5px var(--color-black);
          }
        `
      : css`
          background: transparent;
          border: 1px solid var(--color-off-white);
          box-shadow: inset 0px 0px 3px var(--color-off-white);

          :hover {
            box-shadow: inset 0px 0px 5px var(--color-off-white);
          }
        `};

  :active {
    > span {
      transform: scale(0.8);
    }
  }
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
