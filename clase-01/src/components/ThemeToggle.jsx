import { useState } from "react"

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <>
            <div className={isDark ? 'dark' : 'light'}>
                <button
                    onClick={() => setIsDark(!isDark)}
                >
                    Cambiar a modo oscuro
                </button>

                <p>El tema actual es: Oscuro</p>
            </div>
        </>
    )
}