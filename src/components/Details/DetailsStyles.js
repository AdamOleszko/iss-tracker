import styled from 'styled-components';

export const DetailsContainer = styled.div`

    height: 100%;
    .buttons {
        display: grid;
        margin-bottom: 20px;
        width: 100%;
        grid-template-columns: repeat(2,1fr);
        padding-left: 5px;

        @media (max-width: 1024px) {
            padding-left:0;
        }
        
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

        .btn-chart {
            background-color: ${props => props.tab === 'chart' ? 'rgba(255,255,255,0.5)' : 'inherit'};
        }

        .btn-map {
            background-color: ${props => props.tab === 'map' ? 'rgba(255,255,255,0.5)' : 'inherit'};
        }
    }
`;