import { calculateSpeed, calculateDistance, calculateTime } from '../utils/calculations';

const fetchDataReducer = (state, action) => {
    switch (action.type) {
      case 'firstUpdate':
        return {data: [action.data, ...state.data], wholeDistance: state.wholeDistance, timeout: 5000, speed: []}
      case 'fullUpdate':
      return {
        data: [action.data].concat(state.data.filter((el, i) => {
          return i<1
        })),
        speed: 
          [calculateSpeed(
              calculateDistance(
                  state.data[0].iss_position.latitude, 
                  state.data[0].iss_position.longitude, 
                  action.data.iss_position.latitude, 
                  action.data.iss_position.longitude), 
              calculateTime(
                  state.data[0].timestamp, 
                  action.data.timestamp))]
          .concat(state.speed.filter((el, i) => {
            return i<19
          })),
        wholeDistance:
          state.wholeDistance+calculateDistance(state.data[0].iss_position.latitude, 
                                                state.data[0].iss_position.longitude, 
                                                action.data.iss_position.latitude, 
                                                action.data.iss_position.longitude), 
        timeout: state.timeout
    }
      default: 
        return state;
      }
  }
  
  export default fetchDataReducer;