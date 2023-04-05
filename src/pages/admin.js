import axios from 'axios';
import { UsersForm } from '../../components/UsersForm'
import { Layout } from '../../components/Layout';

function Admin({ usuarios }) {
  return (
    <Layout>
      {usuarios.map(usuario => (
        <div key={usuario.id}>
          <h1>{usuario.nombre}</h1>
          <h2>{usuario.apellido}</h2>
          <p>{usuario.dni}</p>
        </div>
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