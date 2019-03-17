import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import fetchDataReducer from '../../reducers/fetchDataReducer';
import Distance from '../Distance/Distance';
import Speed from '../Speed/Speed';
import Loading from '../Loading/Loading';
import { AppContainer } from './AppStyles';
import Details from '../Details/Details';

const initialState = {data: [], wholeDistance: 0, speed: [], timeout: 0};

const App2 = () => {
  const [state, dispatch] = useReducer(fetchDataReducer, initialState);

  useEffect(
    () => {
        setTimeout(() => {
          fetchData()
        }, state.timeout);
    }
  );

  const fetchData = async () => {
    const {data} = await axios('http://api.open-notify.org/iss-now.json');
    if(state.data[0]) {
        dispatch({type: 'fullUpdate', data:data});  
    } else {
        dispatch({type: 'firstUpdate', data: data});
    }
  }

  return (<AppContainer>{state.speed[0] ? (
      <div className='main-box'>
        <div className='speed'> 
          <Speed speed={state.speed[0]}/>
        </div>
        <div className='chart'>

        <Details data={state.data} speed={state.speed}/>
          
        </div>
        <div className='distance'>
          <Distance distance={state.wholeDistance} />
        </div>
      </div>
    ) : <Loading />}
  </AppContainer>
  )
}

export default App2;
