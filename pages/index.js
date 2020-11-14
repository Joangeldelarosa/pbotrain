import Head from "next/head";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

import "./index.scss";

const animate = {
  open: {
    height: "auto",
    opacity: 1,
  },
  close: {
    height: 0,
    opacity: 0,
  },
};

const animate2 = {
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0.5,
  },
};

function AcercaDe() {
  const [open, setopen] = useState(true);

  const clicked = () => {
    setopen(!open);
    console.log(open);
  };

  return (
    <motion.div
      className="tabContainer"
      variants={animate2}
      animate={!open ? "close" : "open"}
    >
      <div className="tabContainer__Header" onClick={() => clicked()}>
        <h1>Acerca De</h1>{" "}
        <motion.button onClick={() => clicked()}>
          {!open ? "+" : "-"}
        </motion.button>
      </div>
      <motion.div
        className="tabContainer__Content"
        variants={animate}
        animate={!open ? "close" : "open"}
      >
        <p>
          En este programa de entrenamiento avanzado te ofrecemos la mejor
          herramienta para que lleves el seguimiento de tu entrenamiento y
          entrenes de la manera mas efectiva posible.
        </p>
      </motion.div>
    </motion.div>
  );
}

function TabPlan() {
  const [open, setopen] = useState(false);

  const clicked = () => {
    setopen(!open);
    console.log(open);
  };

  return (
    <motion.div
      className="tabContainer"
      variants={animate2}
      animate={!open ? "close" : "open"}
    >
      <div className="tabContainer__Header" onClick={() => clicked()}>
        <h1>Planificacion</h1>{" "}
        <motion.button onClick={() => clicked()}>
          {!open ? "+" : "-"}
        </motion.button>
      </div>
      <motion.div
        className="tabContainer__Content"
        variants={animate}
        animate={!open ? "close" : "open"}
      >
        <p>
          La planificación se basa en un macrociclo de 13 semanas, en el que el
          primer bloque nos centraremos en trabajar movimientos más generales
          como una barra alta, peso muerto convencional desde déficit, inclinado
          (con una inclinación de 25°) y press militar con barra estricto y en
          el segundo bloque nos especializaremos en aquellos movimientos que nos
          permiten mover más kg.
        </p>
        <h2>¿Como calcular RM?</h2>
        <p>
          Esta actualización hay que hacerla una vez acabemos la sesión ya que
          los ajustaremos todo semanalmente, para tratar que haya la máxima
          individualización y nos basamos en base al RM histórico.
        </p>
        <p>
          <strong>Ejemplo:</strong> Si hago 5 repeticiones con 120 kilos RPE7
          (es decir podría haber hecho 3 mas), la carga seria un 80,5%, porque
          en total podría haber hecho 8. Calculo 120/0,805 = 149, por lo que mi
          RM proyectado seria 149 kilos. Conforme nos acerquemos más al RM, es
          decir trabajemos en un rango de repeticiones menor, el RM proyectado
          es fiable. Un 6 RM es mas fiable que un 12 RM.
        </p>
      </motion.div>
    </motion.div>
  );
}

const TabOrganizador = (props) => {
  const [open, setopen] = useState(false);

  const clicked = () => {
    setopen(!open);
    console.log(open);
  };
  return (
    <motion.div
      className="tabContainer"
      ref={props.refProp}
      variants={animate2}
      animate={!open ? "close" : "open"}
    >
      <div className="tabContainer__Header" onClick={() => clicked()}>
        <h1>Organizador</h1>{" "}
        <button onClick={() => clicked()}>{!open ? "+" : "-"}</button>
      </div>
      <motion.div
        className="tabContainer__Content"
        variants={animate}
        animate={!open ? "close" : "open"}
      >
        <div className="rmCalc">
          <h2>
            Coloca tu <span className="red">RM</span> (KG)
          </h2>
          <input type="text" maxLength="3" />
          <span className="desc">
            Esta peso se usara para calcular las variables de cada día.
          </span>
        </div>
        <h2 style={{ marginTop: 50 }}>Calentamiento y Movilidad</h2>
        <p>
          Es importante que te sientas preparado antes de empezar con las series
          de aproximación.
        </p>
      </motion.div>
    </motion.div>
  );
};

const Training = (props) => {
  return <div>Hey</div>;
};

// Home
export default function Home() {
  const myRef = useRef(null);
  const trainRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const viewTraining = () => trainRef.current.scrollIntoView();

  return (
    <div>
      <Head>
        <title>Power Building - Programa de Entrenamiento</title>
      </Head>
      <header>
        <img src="logo-new-pbo.svg" />
        <nav>
          <span id="welcomeMsg">
            Bienvenido, <strong>Joangel De La Rosa</strong>
          </span>
          <a onClick={executeScroll}>Inicio</a>
          <button onClick={viewTraining}>Organizador</button>
        </nav>
      </header>
      <section className="main" ref={myRef}>
        <h1>
          PROGRAMA DE ENTRENAMIENTO<span className="red">AVANZADO</span>
        </h1>
      </section>
      <section className="content">
        <AcercaDe />
        <TabPlan />
        <TabOrganizador refProp={trainRef} />
        <Training />
      </section>
    </div>
  );
}
