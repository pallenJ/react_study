import React from 'react'
import './TodoListTemplate.css';

export const TodoListTemplate = ({form, children}) => {//함수형 컴포넌트, 비구조화 할당
    return (
       <main className = "todo-list-template">
           <div className = "title">
               오늘 할일
           </div>
            
           <selection className ="form-wrapper">
            {form}
           </selection>

           <selection className ="form-wrapper">
            {children}
           </selection>

       </main>
    )
}
