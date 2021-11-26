import styled from 'styled-components'

const NumberIndicatorContainer = styled.button`
  border-radius: 50%;
  padding: 0.5em;
  aspect-ratio: 1;

  :hover,
  :focus {
    cursor: pointer;
    color: hsl(var(--clr-white));
    background-color: hsl(var(--clr-dark));
    border: 1px solid hsl(var(--clr-white));
  }

  &[aria-selected='true'] {
    color: hsl(var(--clr-dark));
    background-color: hsl(var(--clr-white));
  }
`

export default NumberIndicatorContainer
