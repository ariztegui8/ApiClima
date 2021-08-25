import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const [error, guardarError] = useState(false);


    //Extraer cuidad y pais
    const {ciudad, pais} = busqueda;


    //Funcion que coloca los elementos en el state
    const handleChange = (e) =>{

        //Actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }


    //Cuando el usuario da submit al form
    const handleSubmit = e =>{
        e.preventDefault();

        //Validar
        if(ciudad === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //Pasarlo al componente principal
        guardarConsultar(true);


    }


    return (
        <form
        className="formulario-container"
        onSubmit={handleSubmit}
        >
        {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}

            <div className="div-container">
                <label className="form-label" htmlFor="cuidad">Cuidad:</label>
                <input 
                    className="form-input"
                    type="text"
                    name="cuidad"
                    id="cuidad"
                    value={ciudad}
                    onChange={handleChange}
                />
            </div>

            <div className="div-container">
                <label className="form-label" htmlFor="pais">Pais:</label>
                <select
                    className="form-select"
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                     <option>--Seleccione un Pais--</option>
                     <option value="AR">Argentina</option>
                     <option value="BR">Brasil</option>
                     <option value="UR">Uruguay</option>
                     <option value="CH">Chile</option>
                     <option value="PA">Paraguay</option>
                     <option value="CO">Colombia</option>
                     <option value="MX">Mexico</option>
                     <option value="ES">España</option>
                     <option value="Al">Alemania</option>
                     <option value="US">Estados Unidos</option>
                 </select>
               
            </div>

            <div>
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="btn btn-warning btn-form"
                />
            </div>
        </form>
    )
};

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}

export default Formulario
