import { useState } from "react";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import { TodoProvider } from "./context";
import { useEffect } from "react";
import ToDoItem from "./components/ToDoItem/ToDoItem";

function App() {
  const [toDos, setToDos] = useState([]);
  const addToDo = (todo) => {
    setToDos((prev) => {
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  };
  const updateToDo = (id, todo) => {
    setToDos((prev) => {
      return prev.map((prevToDo) => {
        return prevToDo.id === id ? todo : prevToDo;
      });
    });
  };
  const deleteToDo = (id) => {
    setToDos((prev) => {
      return prev.filter((val) => val.id !== id);
    });
  };
  const toggleComplete = (id) => {
    // setToDos((prev) => {
    //   prev.map((val) => {
    //     if (val.id === id) {
    //       return { ...val, completed: !val.completed };
    //     }
    //   });
    // });
    setToDos((prev) =>
      prev.map((prevToDo) =>
        prevToDo.id === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo
      )
    );
  };
  console.log(toDos);
  //GETTING VALUES FROM LOCAL STORAGE
  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem("toDos"));
    if (toDos && toDos.length > 0) {
      setToDos(toDos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);
  return (
    <TodoProvider
      value={{ toDos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Todos
          </h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          {toDos.map((ele) => {
            return <ToDoItem key={ele.id} todo={ele} />;
          })}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
