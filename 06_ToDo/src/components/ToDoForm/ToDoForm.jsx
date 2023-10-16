import { useEffect, useState } from "react";
import { useTodo } from "../../context";

const ToDoForm = () => {
  const [toDoMessage, setToDoMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  useEffect(() => {
    if (toDoMessage.length > 0) {
      setBtnDisabled(false);
    }
  }, [toDoMessage]);
  //ADD TO DO FUNCTION GET GAREKO
  const { addToDo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    addToDo({ todo: toDoMessage, completed: false });
    setToDoMessage("");
  };
  return (
    <div>
      <form onSubmit={add} className="flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={toDoMessage}
          onChange={(e) => setToDoMessage(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
          disabled={btnDisabled}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
