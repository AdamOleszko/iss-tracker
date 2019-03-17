import styled from 'styled-components';

export const AppContainer = styled.div`
    width: 100vw; 
    height: 100vh; 
    background: url('background.jpg') repeat 0 0; 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    .main-box {
        background-color: rgba(50, 50, 50, 0.7);
        padding: 15px;
        border-radius: 5px;
        width: 75vw;
        height: 75vh;
        display: grid;
        grid-template-areas:
            'speed chart chart'
            'distance distance distance';
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 3fr 1fr;
        border: 1px solid rgba(255,255,255, 0.1);
        -webkit-box-shadow: 3px 3px 15px 0px rgba(0,0,0,1);
        -moz-box-shadow: 3px 3px 15px 0px rgba(0,0,0,1);
        box-shadow: 3px 3px 15px 0px rgba(0,0,0,1);
        
        .distance {
            grid-area: distance;
            border-top: 1px solid rgba(255,255,255, 0.1);
        }

        .speed {
            grid-area: speed;
            border-right: 1px solid rgba(255,255,255, 0.1);
            padding: 5%;
            padding-left: 0;
            padding-bottom: 0;
            margin-bottom: 5%;
        }

        .chart {
            grid-area: chart;
            padding-left: 10px;
        }
    }
`;