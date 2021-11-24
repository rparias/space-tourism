import styled from 'styled-components'

const NavigationContainer = styled.nav`
  .primary-navigation {
    --gap: 8rem;
    --underline-gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      text-decoration: none;

      > span {
        font-weight: 700;
        margin-right: 0.5em;
      }
    }
  }

  .underline-indicators {
    > * {
      cursor: pointer;
      border: 0;
      padding: var(--underline-gap, 1rem) 0;
      border-bottom: 0.2rem solid hsl(var(--clr-white) / 0);

      :hover,
      :focus {
        border-bottom-color: hsl(var(--clr-white) / 0.5);
      }
    }

    .active,
    [aria-selected='true'] {
      border-bottom-color: hsl(var(--clr-white) / 1);
    }
  }

  .tab-list {
    --gap: 2rem;
  }
`

export default NavigationContainer
