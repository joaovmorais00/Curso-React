const UserDetails = ({ person }) => {
  return (
    <div>
      <p>Nome: {person.name}</p>
      <p>Idade: {person.age}</p>
      <p>Profissão: {person.profession}</p>
      {person.age >= 18 ? (
        <p>Pode tirar carteira</p>
      ) : (
        <p>Não pode tirar carteira</p>
      )}
      --------------------------------
    </div>
  );
};

export default UserDetails;
