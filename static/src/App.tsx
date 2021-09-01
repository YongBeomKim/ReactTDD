import logo from './logo.svg';
import React from 'react';
import AppStyles from './style/App-style'


const hi = process.env.JS;
console.log(hi);


const { Header, Container, AppLogo, AppLink } = AppStyles

function App() {
  return (
    <Container>
      <Header>
        <AppLogo
          src={logo}
          // src="http://localhost:8000/media/logo.svg"
          alt="logo" 
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </AppLink>
      </Header>
    </Container>
  );
}

export default App;