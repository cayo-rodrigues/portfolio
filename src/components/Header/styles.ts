import styled, { css } from "styled-components"
import { IContactIconContainerProps } from "../../interfaces/header"
import { ILangButtonProps } from "../../interfaces/lang"
import { devices } from "../../styles/global"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background: #1f1f1f;

  @media ${devices.laptop} {
    position: sticky;
    top: 0;
    z-index: 1;
  }
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
          background: transparent;
          border: 1px solid var(--color-light-gray);
        `
      : css`
          color: var(--color-light-gray);
          background: transparent;
          border: 1px solid var(--color-black);
        `};

  :hover {
    box-shadow: inset 0px 0px 3px var(--color-off-white);
  }

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

  > span {
    display: none;
  }

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

  @media ${devices.mobileL} {
    svg {
      margin-right: 0.5rem;
    }

    > span {
      display: inline;
    }
  }

  @media ${devices.tablet} {
    padding: 12px 24px;

    svg {
      margin-right: 1rem;
    }
  }
`
