import axios from "axios";
import { Layout } from "../../../components/Layout";
import { useRouter } from "next/router";

function detalles({ usuario }) {
    const router = useRouter();
    const handleDelete = async (id) => {
        await axios.delete(`/api/usuarios/${id}`);
        router.push('/admin')
    }
    return (
        <Layout>
            <h1>Nombre: {usuario.nombre}</h1>
            <p>Apellido: {usuario.apellido}</p>
            <p>DNI: {usuario.dni}</p>
            <p>Correo: {usuario.mail}</p>
            <p>Domicilio: {usuario.direccion}</p>
            <p>Obra Social: {usuario.obra_social}</p>
            <button
                className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded focus:outline-none font-bold text-white"
                onClick={() => handleDelete(usuario.id)}
            >
                Borrar Datos
            </button>
            <button
                className="bg-gray-500 hover:bg-gray-700 ml-2 py-2 px-4 rounded focus:outline-none font-bold text-white"
                onClick={() => router.push(`/usuarios/editar/${usuario.id}`)}
            >
                Editar Datos
            </button>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { data: usuario } = await axios.get('http://localhost:3000/api/usuarios/' + context.query.id);
    return {
        props: {
            usuario,
        }
    }
}

export default detalles;