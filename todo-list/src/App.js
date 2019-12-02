import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoListTemplate } from './component/TodoListTemplate';
import { Form } from './component/Form';

function App() {
  return (
    <TodoListTemplate form = {<Form></Form>}>
      기본 템플릿
    </TodoListTemplate>

  );
}

export default App;
