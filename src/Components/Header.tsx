import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '..';
import { ReactComponent as DarkModeIcon } from '../icons/dark.svg';
import { setTheme } from '../redux/themeSlice';
import './Header.scss';

export default function Header() {
    const theme = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch();

    const toggleTheme = () : void => {
        if (theme === 'light') {
            dispatch(setTheme('dark'));
        } else {
            dispatch(setTheme('light'));
        }
    }

    return (
        <div className="header">
            <h1 className="header-title">Where in the world?</h1>
            <div className="theme-selector" onClick={ () => toggleTheme() }>
                <DarkModeIcon
                    className='theme-icon'
                />
                <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </div>
        </div>
    )
}
