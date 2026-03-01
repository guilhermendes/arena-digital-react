import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioEventos } from "./componentes/FormularioEventos";
import { Header } from "./componentes/Header";
import { Tema } from "./componentes/Tema";
import { CardEvento } from "./componentes/CardEvento";
import { Footer } from "./componentes/Footer";

function App() {
  const temas = [
    {
      id: 1,
      nome: "Futebol",
    },
    {
      id: 2,
      nome: "Basquete ",
    },
    {
      id: 3,
      nome: "Ciclismo",
    },
    {
      id: 4,
      nome: "Tênis",
    },
    {
      id: 5,
      nome: "Natação ",
    },
    {
      id: 6,
      nome: "Atletismo",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "/futebol1.jpg",
      tema: temas[0],
      data: new Date("2026-08-11"),
      titulo: "Taça União Esportiva",
    },

    {
      capa: "/futebol2.jpg",
      tema: temas[0],
      data: new Date("2026-06-15"),
      titulo: "Super Copa Talentos",
    },

    {
      capa: "/futebol3.jpg",
      tema: temas[0],
      data: new Date("2026-06-25"),
      titulo: "Copa Império da Bola",
    },

    {
      capa: "/futebol4.jpg",
      tema: temas[0],
      data: new Date("2026-09-03"),
      titulo: "Festival Gol de Ouro",
    },
    {
      capa: "/corrida1.jpg",
      tema: temas[5],
      data: new Date("2026-09-03"),
      titulo: "Circuito Velocidade Máxima",
    },
    {
      capa: "/corrida2.jpg",
      tema: temas[5],
      data: new Date("2026-09-03"),
      titulo: "Corrida Trilhas da Superação",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <>
      <main>
        <Header />
        <Banner />
        <FormularioEventos temas={temas} aoSubmeter={adicionarEvento} />

        <section className="container">
          {temas.map(function (tema) {
            if (
              !eventos.some(function (evento) {
                return evento.tema.id == tema.id;
              })
            ) {
              return null;
            }

            return (
              <section key={tema.id}>
                <Tema tema={tema} />
                <div className="eventos">
                  {eventos
                    .filter(function (evento) {
                      return evento.tema.id == tema.id;
                    })
                    .map(function (evento, index) {
                      return <CardEvento evento={evento} key={index} />;
                    })}
                </div>
              </section>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
