import { useEffect, useState } from "react";
import Clima from "./components/Clima";
import Error from "./components/Error";
import Formulario from "./components/Formulario";
import Header from "./components/Header";


function App() {

  //State del formulario
  const [busqueda, guardarBusqueda] = useState({
    cuidad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);

  const [resultado, guardarResultado] = useState({});

  const [error, guardarError] = useState(false);

  //Extraer cuidad y pais
  const {ciudad, pais} = busqueda;

  useEffect(()=> {
    const consultarAPI = async () =>{

      if(consultar){
        const appId = '2ed9a0a73cba13fe5c78a24374b1af77';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
  
        guardarResultado(resultado);
        guardarConsultar(false);

        //Detecta si hubo resultados correctos en la busqueda
          if(resultado.cod === "404"){
            guardarError(true);
          }else{
            guardarError(false);
          }
      }

    }
    consultarAPI();
    //eslint-disable-next-line
  },[consultar]);

 //Carga condicional de componentes
  let componente;
  if(error) {
    componente = <Error mensaje="No hay resultados"/>
  }else{
    componente = <Clima 
                    resultado={resultado}
    />
  }



  return (
    <>
      <Header
        titulo='API Clima'
      />

      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col-sm-6">
                      <Formulario
                        busqueda={busqueda}
                        guardarBusqueda={guardarBusqueda}
                        guardarConsultar={guardarConsultar}
                      />
                  </div>

                  <div className="col-sm-6">
                      {componente}
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
