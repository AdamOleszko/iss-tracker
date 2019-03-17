import styled from 'styled-components';

export const DistanceContainer = styled.div`
    color: white;
    font-size: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .header {
        font: 24px italic;
        text-align: center;
        margin: 12px;
    }

    .value {
        text-align: center;
    }

    .unit {
        font-size: 24px;
    }

    .buttons {
        display: grid;
        margin-top: 20px;
        width: 100%;
        grid-template-columns: repeat(2,1fr);
        
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

        .m {
            background-color: ${props => props.unit === 'm' ? 'rgba(255,255,255,0.5)' : 'inherit'};
        }

        .km {
            background-color: ${props => props.unit === 'km' ? 'rgba(255,255,255,0.5)' : 'inherit'};
        }
    }

`;