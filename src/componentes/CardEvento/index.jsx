import "./card-eventos.estilos.css";

export function CardEvento({ evento }) {
  return (
    <div className="Card-evento">
      <img src={evento.capa || "/imagem-default.jpg"} alt={evento.titulo} />
      <div className="corpo">
        <p className="tag">{evento.tema.nome}</p>
        <p className="data">{evento.data.toLocaleDateString("pt-BR")}</p>
        <h4 className="titulo">{evento.titulo}</h4>
      </div>
    </div>
  );
}
