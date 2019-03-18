import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const MyLineChart = ({ id, data}) => {
    data = data.map((el, i) => {
        let x = Math.round(el.speed);
        return {
            time: el.time,
            speed: x
        }
    })
    data = data.reverse();
    
    return (
      <ResponsiveContainer width='99%' aspect={2}>
        <LineChart width={900} height={450} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="linear" dataKey="speed" stroke="#FFFFFF" strokeWidth={3} dot isAnimationActive={false}/>
            <XAxis dataKey="time" />
            <YAxis  domain={['dataMin - 100', 'dataMax + 100']} name='speed' />
        </LineChart>
      </ResponsiveContainer>
    );
  }
    
export default MyLineChart;