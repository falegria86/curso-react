import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users/');
            const data = await resp.json();

            setUsers(data);
        } catch (error) {
            console.error('Error al obtener datos: ', error)
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {isLoading ? (
                <div>
                    <BeatLoader size={8} />
                </div>
            ) : (
                <>
                    <h2>User List</h2>
                    <ul>
                        {users.map(usuario => (
                            <li key={usuario.id}>
                                {usuario.name}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}
export default UserList