// state kullanabilmek icin reac useState import ettim
import React, { useEffect, useState } from "react";
import "./App.css";

// Componentleri import ettim
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // todo ekleyecegim text input icin state olusturdum
  const [inputText, setInputText] = useState("");
  // todolari tutmak icin state olusturdum ve bir array olacagi icin baslangic degerine bos bir array verdim
  const [todos, setTodos] = useState([]);

  // localStorage'dan verileri aldim. useEffencte bos bir array vererek sayfa yuklendiginde 1defa calismasini sagladim
  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect ile todos her degistinde localStorage fonksiyonunu calismasini sagladim
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  // yukarida tanimlanan useEffect ile todos arrayi her degistiginde tetiklenen fonksiyon ile localStorage'a verileri kaydettim
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    // localStorage kontrol ettim boşsa boş bir array kaydettim
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      // localStorage boş değilse json parse ile tekrar arraya çevirerek todoları gelen veriyle set ettim
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>React Todo App</h1>
      </header>

      {/* Form componentine app'in sahip oldugu input ve todo satatelerini gonderdim */}
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
      />

      {/* TodoList componentine todos arrayini gonderdim */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
