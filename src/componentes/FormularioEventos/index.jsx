import { Botao } from "../Botao";
import { CampoEntrada } from "../CampoEntrada";
import { CampoFormulario } from "../CampoFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import "./formulario-eventos.estilos.css";

export function FormularioEventos({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find(function (item) {
        return item.id == formData.get("tema");
      }),
      data: new Date(formData.get("dataEvento") + "T00:00"),
      titulo: formData.get("nomeEvento"),
    };
    aoSubmeter(evento);
  }

  return (
    <section className="container">
      <form className="form-evento" action={aoFormSubmetido}>
        <TituloFormulario>Preencha para criar um evento</TituloFormulario>

        <div className="campos">
          <CampoFormulario>
            <Label htmlFor="nome">Nome do evento</Label>
            <CampoEntrada
              type="text"
              name="nomeEvento"
              id="nomeEvento"
              required
              minLength={10}
              placeholder="Ex: Copa Arena 2026"
            />
          </CampoFormulario>

          <CampoFormulario>
            <Label htmlFor="nome">Endereço da capa</Label>
            <CampoEntrada
              type="text"
              name="capa"
              id="capa"
              required
              minLength={10}
              placeholder="Ex: https://"
            />
          </CampoFormulario>

          <CampoFormulario>
            <Label htmlFor="nome">Data do evento</Label>
            <CampoEntrada
              type="date"
              name="dataEvento"
              id="dataEvento"
              required
            />
          </CampoFormulario>

          <CampoFormulario>
            <Label htmlFor="tema">Tema do evento</Label>
            <ListaSuspensa
              id="tema"
              name="tema"
              required
              itens={temas}
            ></ListaSuspensa>
          </CampoFormulario>

          <div className="acoes">
            <Botao>Criar</Botao>
          </div>
        </div>
      </form>
    </section>
  );
}
