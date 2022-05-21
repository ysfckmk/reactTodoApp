import React from "react";
// Todo componentini import ettim
import Todo from "./Todo";
import TodoCounter from "./TodoCounter"
// parenttan gelen todos arrayini aldim
const TodoList = ({ todos , setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">

          {/* todo arrayi bos ise ekranda listeniz bos uyarisi verdirdim */}
        {todos.length == 0 ?  <div className="emptyList" >Henüz Todo Eklemediniz</div> :  <TodoCounter todos={todos}/>}
       
         
        {/* todos arrayini map ile donerek her objeyi todo olarak todo componentine gonderdim ve key parametresine idyi verdim */}
        {todos.map((todo) => (
            // todo componentine todos ve setStodos statelerini gondererek component icinde silme ve complete islemlerini yaptim
          <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
