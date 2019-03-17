import styled from 'styled-components';

export const SpeedContainer = styled.div`
    color: white;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    .header {
        font: 50% italic;
        text-align: center;
    }

    .value {
        font: 110% bold;
        text-align: center;
    }

    .unit {
        font-size: 50%;
    }

    .buttons {
        display: grid;
        margin-top: 10%;
        width: 100%;
        grid-template-columns: repeat(3,1fr);
        
        .button {
            padding: 5px;
            border: 1px solid rgba(255,255,255, 0.1);
            font-size: 20px;
            cursor: pointer;
            text-align: center;
        }

        .button:last-child {
            -webkit-border-top-right-radius: 3px;
            -webkit-border-bottom-right-radius: 3px;
            -moz-border-radius-topright: 3px;
            -moz-border-radius-bottomright: 3px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }

        .button:first-child {
            -webkit-border-top-left-radius: 3px;
            -webkit-border-bottom-left-radius: 3px;
            -moz-border-radius-topleft: 3px;
            -moz-border-radius-bottomleft: 3px;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }

        .button:hover {
            background-color: rgba(255,255,255,0.2)
        }

        .ms {
            background-color: ${props => props.unit === 'm/s' ? 'rgba(255,255,255,0.5)' : 'inherit'};
        }

        .kms {
            background-color: ${props => props.unit === 'km/s' ? 'rgba(255,255,255,0.5)' : 'inherit'};
        }

        .kmh {
            background-color: ${props => props.unit === 'km/h' ? 'rgba(255,255,255,0.5)' : 'inherit'};
        }
    }

    .next {
        font-size: 100%;
        text-align: center;
        margin-top: 30%;
    }
`;