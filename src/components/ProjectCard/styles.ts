import styled from "styled-components"
import { devices } from "../../styles/global"

export const CardContainer = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 2px 2px 5px var(--color-black);
  border-radius: 8px;
  background: var(--color-bg-smooth);

  transition: var(--transition);

  img {
    width: 38%;
  }

  h4 {
    margin: 10px 0 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-dark-gray);
  }

  p {
    font-weight: 300;
    font-size: 0.9rem;
    color: var(--color-off-white);
    line-height: 1.2rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--color-dark-gray);
  }

  div:last-child {
    padding: 1rem 0;

    button {
      width: 48%;
      padding: 5px;

      /* background: var(--color-dark-gray); */
      background: var(--color-highlight);
      /* background: var(--color-main); */
      border: 0;
      margin: 0 1%;
      border-radius: 0.2rem;
      font-weight: 500;

      box-shadow: 1px 1px 2px var(--color-black);

      transition: var(--transition);

      :hover {
        /* background: var(--color-highlight); */
        box-shadow: 2px 2px 3px var(--color-black);
      }
    }
  }

  @media ${devices.tablet} {
    width: 48%;
    margin: 1rem 1%;
  }
`
