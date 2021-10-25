import styled, {keyframes} from 'styled-components';

// ===== App Main Styles =======

// CSS 문법으로 Template literals 를 활용 가능하다
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgb(0,0,0,0.2);
`

// ====== Input Component Styles ========
export const InputContainer = styled.div`
  display: flex;
`

// ======= ToDoItem Component Styles ========
export const ToDoItem = styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`

export const Label = styled.div`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
`


const styles = { Container, Content };
export default styles;