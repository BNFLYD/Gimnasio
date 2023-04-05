import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export function UsersForm() {
  const router = useRouter();
  const handleChange = ({ target: { name, value } }) => {
    setUsuario({ ...usuario, [name]: value })
  }
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    mail: '',
    direccion: '',
    obra_social: ''
  })

  useEffect(() => {
    const fetchUsuario = async (id) => {
      try {
        const { data } = await axios.get("/api/usuarios/" + id);
        setUsuario(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (router.query.id) {
      fetchUsuario(router.query.id);
    }
    console.log("called");
  }, [router.query.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (router.query.id) {
      console.log(`actualizando datos`)
      const res = await axios.put(`/api/usuarios/${router.query.id}`, {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        dni: usuario.dni,
        mail: usuario.mail,
        direccion: usuario.direccion,
        obra_social: usuario.obra_social
      });
      console.log(res);
    } else {
      const res = await axios.post('/api/usuarios', usuario);
      console.log(res);
    }
    router.push('/admin');
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label htmlFor='nombre'>Nombre:</label>
        <input
          type='text'
          name='nombre'
          onChange={handleChange}
          className="shadow border rounded py-2 px-3"
          value={usuario.nombre}
        />

        <label htmlFor='apellido'>Apellido:</label>
        <input
          type='text'
          name='apellido'
          onChange={handleChange}
          className="shadow border rounded py-2 px-3"
          value={usuario.apellido}
        />

        <label htmlFor='dni'>DNI:</label>
        <input
          type='number'
          name='dni'
          onChange={handleChange}
          className="shadow border rounded py-2 px-3"
          value={usuario.dni}
        />

        <label htmlFor='mail'>Correo:</label>
        <input
          type='text'
          name='mail'
          onChange={handleChange}
          className="shadow border rounded py-2 px-3"
          value={usuario.mail}
        />


        <label htmlFor='direccion'>Domicilio:</label>
        <input
          type='text'
          name='direccion'
          onChange={handleChange}
          className="shadow border rounded py-2 px-3"
          value={usuario.direccion}
        />


        <label htmlFor='obra_social'>Obra Social</label>
        <input
          type='text'
          name='obra_social'
          onChange={handleChange}
          className="shadow border rounded py-2 px-3"
          value={usuario.obra_social}
        />

        <button
          className="bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded focus:outline-none font-bold text-white"
        >
          {
            router.query.id ? `Actualizar Datos` : `Guardar Datos`
          }
        </button>

      </form>
    </div>
  )
}