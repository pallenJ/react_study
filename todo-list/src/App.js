import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { TodoListTemplate } from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

function App() {

  id = 3;

  this.state = {
    input : '',
    todos : [
      { id :0,text:'끝내주게 숨쉬기', checked: true},
      { id :1,text:'간지나게 자기', checked: false},
      { id :2,text:'작살나게 밥먹기', checked: true}
    ]
  };
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }


  return (
    <TodoListTemplate form = {<Form/>}>
      <TodoItemList/>
    </TodoListTemplate>

  );
}

export default App;
