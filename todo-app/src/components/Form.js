import React from "react";
import AddPng from "../assets/icons/add.png"
// yukaridan gonderilen stateleri bu componente dahil ettim
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  // javascript kodu ile inputtan gelen degeri yakalayarak hedefin icersindeki degeri bir ust componentin stateine gonderdim
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // sayfanin yenilenmesini engelledim
    e.preventDefault();
    if(inputText!=="")
    // inputTextState'de bulunan degeri ,tamamladi false ve idsini math random ile todo arrayine ekledim
    // uygulama kucuk oldugu icin idye random sayi vermenin yeterli olacagini dusundum
    if(inputText!==""){
    // input degerini kontrol ederek bos todo eklenmesini engelledim
        setTodos([
            ...todos, {text: inputText, completed:false , id: Math.random()* 10000}
        ])
            
        // Input stateini sifirlayarak tekrar ayni todo girilmesini engelledim
        setInputText("");
    }
   
  };
  return (
    <form>
      {/* inputun onChange ozelligi ile deger degistiginde veriyi fonksiyona gonderdim */}
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Bir todo ekle..."
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit" >
      <img src={AddPng} className="addButton" alt="Todo ekle"/>
      </button>
    </form>
  );
};

export default Form;
