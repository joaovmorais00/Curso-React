import "./Start.css";

const Start = ({ startGame }) => {
  return (
    <div className="Start">
      <h1>Palavra Secreta</h1>
      <p>Clique no botão abaixo para iniciar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default Start;
