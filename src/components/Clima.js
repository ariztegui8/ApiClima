import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    //Extraer los valores
    const{name, main} = resultado;
   

    if(!name) return null;

    //Pasar a grados kelvin
    const kelvin = 273.15;

    return (
        <div className="card">
            <h2 className="contenido-h2">El Clima de {name} es:</h2>
            <p className="contenido-p">{parseFloat(main.temp - kelvin, 10).toFixed(1)} <span>&#x2103;</span></p>
            <p className="max-min">Max {parseFloat(main.temp_max - kelvin, 10).toFixed(1)} <span>&#x2103;</span></p>
            <p className="max-min">Min {parseFloat(main.temp_min - kelvin, 10).toFixed(1)} <span>&#x2103;</span></p>

        </div>
    )
};

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima
