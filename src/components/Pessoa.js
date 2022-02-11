function Pessoa({ nome, foto, idade, prof }) {
  return (
    <div>
      <img src={foto} width='150' alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {prof}</p>
    </div>
  );
}

export default Pessoa;
