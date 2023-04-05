import axios from "axios";
import { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/usuarios', usuario);
    console.log(res);
    router.push('/admin');
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label htmlFor='nombre'>Nombre:</label>
        <input type='text' name='nombre' onChange={handleChange} className="shadow border rounded py-2 px-3" />

        <label htmlFor='apellido'>Apellido:</label>
        <input type='text' name='apellido' onChange={handleChange} className="shadow border rounded py-2 px-3" />

        <label htmlFor='dni'>DNI:</label>
        <input type='number' name='dni' onChange={handleChange} className="shadow border rounded py-2 px-3" />

        <label htmlFor='mail'>Correo:</label>
        <input type='text' name='mail' onChange={handleChange} className="shadow border rounded py-2 px-3" />


        <label htmlFor='direccion'>Domicilio:</label>
        <input type='text' name='direccion' onChange={handleChange} className="shadow border rounded py-2 px-3" />


        <label htmlFor='obra_social'>Obra Social</label>
        <input type='text' name='obra_social' onChange={handleChange} className="shadow border rounded py-2 px-3" />

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none font-bold text-white"> Guardar Datos</button>

      </form>
    </div>
  )
}