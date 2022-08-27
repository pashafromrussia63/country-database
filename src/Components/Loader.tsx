import React from 'react';
import './Loader.scss';

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader-content">
                <svg viewBox="0 0 100 100">
                    <circle className="loader-spinner" 
                        cx="50" 
                        cy="50" 
                        r="45"/>
                </svg>
            </div>
        </div>
    )
}

