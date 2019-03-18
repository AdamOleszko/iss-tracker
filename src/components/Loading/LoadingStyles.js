import styled from 'styled-components';

export const LoadingContainer = styled.div `
    color: white;
    font-size: 48px;
    text-align: center;
    width: 100%;

    .container {
        width: 100%;
        text-align: center;
    }

    .container .progress {
        margin: 0 auto;
        width: 75%;
    }

    .progress {
        padding: 4px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
    }

    .progress-bar {
        height: 36px;
        width: ${props => props.loaderWidth >= 100 ? '100%' : `${props.loaderWidth}%`};
        background-color: ${props => {
            if(props.loaderWidth < 15) return '#f63a0f';
            else if(props.loaderWidth < 30) return '#f27011';
            else if(props.loaderWidth < 50) return '#f2b01e';
            else if(props.loaderWidth < 75) return '#f2d31b';
            else return '#86e01e';}
        };
        border-radius: 4px;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
        transition: 0.4s linear;
        transition-property: width, background-color;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1);
}`