import axios from 'axios';
import { UsersForm } from '../../components/UsersForm'
import { Layout } from '../../components/Layout';
import Link from 'next/link';

function Admin({ usuarios }) {
    return (
        <Layout>
            {usuarios.map(usuario => (
                <Link href={`/usuarios/${usuario.id}`} key={usuario.id}>
                    <div className='border border-gray-200 shadow-md p6'>
                        <h1>{usuario.nombre}</h1>
                        <h2>{usuario.apellido}</h2>
                        <p>{usuario.dni}</p>
                    </div>
                </Link>
            ))}
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { data: usuarios } = await axios.get('http://localhost:3000/api/usuarios');
    return {
        props: {
            usuarios,
        },
    }
}

export default Admin; 