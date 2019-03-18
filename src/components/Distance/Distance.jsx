import React, { useState } from 'react';
import { DistanceContainer } from './DistanceStyles';
import { toKilometers } from '../../utils/calculations';

const Distance = ({ distance }) => {
    const [unit, setUnit] = useState('m');

    const newDistance = (distance) => {
        if(unit === 'km') {
            return toKilometers(distance);
        }
        if(unit === 'm') {
            return distance;
        }
    }

    return (
        <DistanceContainer unit={unit}>
            <p className='header'>Since you are on this site the ISS has traveled:</p>
            <div className='value'>
                {Math.round(newDistance(distance) * 100) / 100} <span className='unit'>{unit === 'm' ? 'meters':'kilometers'}</span>
            </div>
            <div className='buttons'>
                <div className='button m' onClick={() => setUnit('m')}>meters</div>
                <div className='button km' onClick={() => setUnit('km')}>kilometers</div>
            </div>
            <p className='copy'>Copyright &copy; Adam Oleszko 2019</p>
        </DistanceContainer>
    )
}

export default Distance ;