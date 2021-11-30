import styled from 'styled-components'

const LargeButtonContainer = styled.a`
  position: relative;
  display: inline-grid;
  z-index: 1;
  place-items: center;
  padding: 0 2em;
  border-radius: 50%;
  aspect-ratio: 1;
  text-decoration: none;

  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    background: hsl(var(--clr-white) / 0.15);
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  :hover::after,
  :focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`

export default LargeButtonContainer
