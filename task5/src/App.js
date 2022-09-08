import logo from "./logo.svg";
import "./App.css";
import CarDetails from "./components/CarDetails/CarDetails";

function App() {
  const cars = [
    { placa: "bxm-5030", marca: "Fiat", modelo: "Palio" },
    { placa: "UFG-6789", marca: "Volkswagen", modelo: "gol" },
    { placa: "hjk-0967", marca: "Honda", modelo: "Civic" },
  ];
  return (
    <div className="App">
      <h1 className="titulo">Tarefa 5</h1>
      {cars.map((car) => (
        <CarDetails car={car} />
      ))}
    </div>
  );
}

export default App;
