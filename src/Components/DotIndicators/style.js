import styled from 'styled-components'

const DotIndicatorsContainer = styled.div`
  > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    padding: 0.5em;
    aspect-ratio: 1;
    background-color: hsl(var(--clr-white) / 0.25);

    &:hover,
    &:focus {
      background-color: hsl(var(--clr-white) / 0.5);
    }
  }

  > [aria-selected='true'] {
    background-color: hsl(var(--clr-white) / 1);
  }
`

export default DotIndicatorsContainer
