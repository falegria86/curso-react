import { useState } from "react"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={isDarkMode ? 'dark' : 'light'}>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>Cambiar a {isDarkMode ? 'modo claro' : 'modo oscuro'}</button>

            <p>El tema actual es: {isDarkMode ? 'oscuro' : 'claro'}</p>
        </div>
    )
}