import React, { useState } from 'react';
import { SpeedContainer } from './SpeedStyles'; 
import { toKilometersPerSecond, toKilometersPerHour } from '../../utils/calculations';


const Speed = ({ speed }) => {
    const [unit, setUnit] = useState('m/s');

    const newSpeed = (speed) => {
        if(unit === 'km/s') {
            return toKilometersPerSecond(speed);
        }
        if(unit === 'km/h') {
            return toKilometersPerHour(speed);
        }
        if(unit === 'm/s') {
            return speed;
        }
    }

    return (
        <SpeedContainer unit={unit}>
            <h1>ISS Tracker</h1>
            <p className="header">Current speed of ISS:</p>
            <div className="value">
                {Math.round(newSpeed(speed) * 100) / 100} <span className="unit">{unit}</span>
            </div>
            <div className='buttons'>
                <div className='button ms' onClick={() => setUnit('m/s')}>m/s</div>
                <div className='button kms' onClick={() => setUnit('km/s')}>km/s</div>
                <div className='button kmh' onClick={() => setUnit('km/h')}>km/h</div>
            </div>
        </SpeedContainer>
    );
}

export default Speed ;