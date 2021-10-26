import React, { createContext, useState, useEffect } from "react";


// JSX.Element :: JSX 결과 타입 (ReactElement)
// https://www.typescriptlang.org/ko/docs/handbook/jsx.html
interface Props {
  children: JSX.Element | JSX.Element[];
}

interface Context {
  readonly toDoList: string[];
  readonly addToDo: (toDo: string) => void;
  readonly deleteToDo: (index: number) => void;
}


// Context :: props 로 넘기지 않고 컴포넌트 전체에 데이터 제공
// Context 로 독립된 React Components 로써 Props, State 를 전달 받는다
// https://ko.reactjs.org/docs/context.html
const ToDoListContext = createContext<Context>({
  toDoList: [],
  addToDo: ():void => {},
  deleteToDo: ():void => {},
});


const ToDoListProvider = ({children}: Props): JSX.Element => {

  const [toDoList, setToDoList] = useState<string[]>([]);
  const addToDo = (toDo: string): void => {
    if (toDo) {
      const newList = [...toDoList, toDo];
      localStorage.setItem('ToDoList', JSON.stringify(newList))
      setToDoList(newList);
      console.log(toDo, toDoList);
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);    // 특정 인덱스에서 1개 삭제
    localStorage.setItem('ToDoList', JSON.stringify(list));
    setToDoList(list);
  };

  // useEffect :: componentDidMount 와 동일한 역활을 수행
  // localStorage :: String 데이터 저장, 객체 변환시 JSON 인코딩 필요
  useEffect(() => {
    const list = localStorage.getItem('ToDoList');
    if (list) {
      setToDoList(JSON.parse(list));
    }
  }, []); // [] : initial value

  return(
    // Provider :: Context 자손에게 제공
    <ToDoListContext.Provider
      value={{
        toDoList, addToDo, deleteToDo
    }}>
      {children}
    </ToDoListContext.Provider>
  )
}

export { ToDoListContext, ToDoListProvider };