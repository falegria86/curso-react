import { useState } from "react"

const TodoList = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregarTarea = () => {
        setTareas([tarea, ...tareas]);
        setTarea('');
    }

    const eliminarTarea = (tareaDelete) => {
        const filtro = tareas.filter(item => item !== tareaDelete);
        setTareas(filtro);
    }

    return (
        <>
            <h3>Lista de tareas</h3>
            <input
                type="text"
                placeholder="Nueva tarea..."
                value={tarea}
                onChange={(event) => setTarea(event.target.value)}
            />
            <button onClick={agregarTarea}>Agregar tarea</button>

            <ul>
                {tareas.map((elemento, index) => (
                    <li key={index} style={{ marginBottom: 8 }}>
                        {elemento}
                        <button onClick={() => eliminarTarea(elemento)} style={{ marginLeft: 12, backgroundColor: 'red', color: 'white' }}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TodoList