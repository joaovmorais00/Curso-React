import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const people = [
    { id: 0, name: "João Vitor", age: 22, profession: "Programador" },
    { id: 1, name: "Pedro", age: 20, profession: "Eletricista" },
    { id: 2, name: "Antônio", age: 54, profession: "Piloto de avião" },
    { id: 3, name: "Manuela", age: 8, profession: "Estudante" },
  ];
  return (
    <div className="App">
      <h1>Pessoas:</h1>
      {people.map((person) => (
        <UserDetails person={person} />
      ))}
    </div>
  );
}

export default App;
