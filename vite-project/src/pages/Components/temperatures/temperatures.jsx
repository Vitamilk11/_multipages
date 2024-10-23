import { useState, useEffect } from 'react';
import Variable from '../variable/variable';

import './temperatures.css';

function Temperatures() {

    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState((celsius * 1.8) + 32);
    const [kelvin, setKelvin] = useState(celsius + 273.15);

    useEffect(() => {
        setFahrenheit((celsius * 1.8) + 32);
        setKelvin(celsius + 273.15);
    }, [celsius]);

    useEffect(() => {
        setCelsius((fahrenheit - 32) / 1.8);
    }, [fahrenheit]);

    useEffect(() => {
        setCelsius(kelvin - 273.15);
    }, [kelvin]);

    return (
        <div className="container">

            <div>
                <h3>Temperatures</h3>
            </div>

            <div className="container-badges">
                <span className='badge bg-primary'>{celsius.toFixed(2)} °C</span>
                <span className='badge bg-primary'>{fahrenheit.toFixed(2)} °F</span>
                <span className='badge bg-primary'>{kelvin.toFixed(2)} °K</span>
            </div>

            <div className="temperatures">
                <Variable className="variable" name="Celsius" count={celsius} setCount={setCelsius} />
                <Variable className="variable" name="Fahrenheit" count={fahrenheit} setCount={setFahrenheit} />
                <Variable className="variable" name="Kelvin" count={kelvin} setCount={setKelvin} />
            </div>

        </div>

    );
}

export default Temperatures;



