import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;// todos: todo 객체들이 들어있는 배열,onToggle: 체크박스를 키고 끄는 함수,onRemove: 아이템을 삭제시키는 함수

    return (
      <div>
        <TodoItem text="끝내주게 숨쉬기"/>
        <TodoItem text="간지나게 자기"/>
        <TodoItem text="작살나게 밥먹기"/> 
      </div>
    );
  }
}

export default TodoItemList;