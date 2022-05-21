import React from "react";
import RemovePNG from "../assets/icons/remove.png"
import CheckedPNG from "../assets/icons/checked.png"
import UnCheckedPNG from "../assets/icons/unchecked.png"
// parenttan gelen todoyu aldim
const Todo = ({ todo, todos, setTodos }) => {
    // Silme ve Tamamlanan todo eventlerini burada olusturdum
    const deleteHandler = () => {
        // silme islemi icin idsi ile filter islemi yaptim
        setTodos(todos.filter(el => el.id !== todo.id ));
    }

    // tamamlanan todolar icin todos icerisinde map ile donerek complete durumunu toggle hale getirdim ve buton ile cagirdim
    const completeHander = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed : !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className="todo">
        {/* listin classina tek satir if yazarak eger completed true ise completed classini eklemesini sagladim */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li> 
      <button onClick={completeHander}  className="complete-btn">
          {/* comlete durumuna göre butonu dinamik hale getirdim */}
            <img src={` ${todo.completed ? CheckedPNG : UnCheckedPNG}`} className="imgButtons" alt="Complete" />
      
         {/* silme işlemi için butonun onClick özelliğine silme fonksiyonunu bağladım */}
      </button>
      <button onClick={deleteHandler} className="trash-btn">
      <img src={RemovePNG} alt="Remove" className="imgButtons"/>
      </button>
    </div>
  );
};

export default Todo;
