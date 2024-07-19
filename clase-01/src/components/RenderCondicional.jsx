import { useState } from "react"

export const RenderCondicional = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            {isVisible && (
                <div>
                    Es visible
                </div>
            )}

            <button onClick={() => setIsVisible(!isVisible)} style={{ marginTop: 20 }}>
                {isVisible ? 'Esconder' : 'Mostrar'}
            </button>
        </>
    )
}