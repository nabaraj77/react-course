import AddToDo from "./components/AddToDo";
import ToDo from "./components/ToDo";

const App = () => {
  return (
    <div>
      Redux-toolkit Example for ToDo
      <AddToDo />
      <ToDo />
    </div>
  );
};

export default App;
