import React from 'react';
import { ReactComponent as DarkModeIcon } from '../icons/dark.svg';
import './Header.scss';

export default function Header({ onToggle, theme  } : { onToggle: () => void, theme : string}) {
    return (
        <div className="header">
            <h1 className="header-title">Where in the world?</h1>
            <div className="theme-selector" onClick={ onToggle }>
                <DarkModeIcon
                className='theme-icon'
                />
                <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </div>
        </div>
    )
}

