export const Boton = ({ texto = "Valor default" }) => {
    return (
        <button onClick={() => suma(2, 3)}>
            {texto}
        </button>
    )
}