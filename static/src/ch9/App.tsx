import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Styled from 'styled-components';
import { InputContainer, PageHeader, ToDoList } from './Components';
import { ToDoListProvider } from './Contexts';
import { Add, List, Detail, NotFound } from './Pages';


const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;


export default function App() {  
  return(
    <BrowserRouter>
      <ToDoListProvider>
        <Container>
          <PageHeader />
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
            {/* :id : URL 매개변수 추가 */}
            <Route path ="/detail/:id">
              <Detail></Detail>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </ToDoListProvider>
    </BrowserRouter>
  )
}