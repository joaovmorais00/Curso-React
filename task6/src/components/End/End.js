import "./End.css";

const End = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>
        A sua Pontuação foi:<span>{score}</span>
      </h2>
      <button onClick={retry}>Recomeçar</button>
    </div>
  );
};

export default End;
