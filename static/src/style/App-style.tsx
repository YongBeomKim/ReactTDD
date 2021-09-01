import styled, {keyframes} from 'styled-components';


// CSS 문법으로 Template literals 를 활용 가능하다
const Container = styled.div`
  text-align: center;
`

const Header  = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`


const styles = { Header, Container, AppLogo, AppLink };
export default styles;