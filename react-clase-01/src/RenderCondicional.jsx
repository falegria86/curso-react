import { useState } from "react";

export const RenderCondicional = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div style={{ marginTop: 20 }}>
                {isVisible && (
                    <div>RenderCondicional</div>
                )}
                <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Esconder' : 'Mostrar'}</button>
            </div>
        </>
    )
}
