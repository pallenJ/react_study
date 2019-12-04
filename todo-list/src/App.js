import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { TodoListTemplate } from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
id = 3;

state = { //state 를 다룰땐 push를 쓰면 최적화를 못하므로 절대 push를 써선 안됨
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

handleToggle = (id) => {//체크하기/풀기
  const { todos } = this.state;

  // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
  const index = todos.findIndex(todo => todo.id === id);
  const selected = todos[index]; // 선택한 객체

  const nextTodos = [...todos]; // 배열을 복사

  // 기존의 값들을 복사하고, checked 값을 덮어쓰기
  nextTodos[index] = { 
    ...selected, 
    checked: !selected.checked
  };

  this.setState({
    todos: nextTodos
  });
}

handleRemove = (id) => {//삭제
  const { todos } = this.state;
  this.setState({
    todos: todos.filter(todo => todo.id !== id)
  });
}

render() {
  const { input } = this.state;
  const {
    handleChange,
    handleCreate,
    handleKeyPress
  } = this;

  return (
    <TodoListTemplate form={(
      <Form 
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
    )}>
      <TodoItemList todos={this.state.todos} onToggle={this.handleToggle} onRemove={this.handleRemove}/>
    </TodoListTemplate>
  );
}
}

export default App;
