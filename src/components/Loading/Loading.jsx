import React, { useState } from 'react';
import { LoadingContainer } from './LoadingStyles';

const Loading = () => {
    const [loader, setLoader] = useState(2);
    setTimeout(() => {
            setLoader(loader+10)
    }, 500);

    return (
        <LoadingContainer loaderWidth={loader}>
        <h1>ISS Tracker</h1>
        <p>Loading...</p>
        <div className='container'>
            <div className="progress">
                <div className="progress-bar"></div>
            </div>
        </div>
        </LoadingContainer>
    )
}

export default Loading ;