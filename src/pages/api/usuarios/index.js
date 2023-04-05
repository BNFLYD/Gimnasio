import { pool } from '../../../../config/db'
export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return await guardar_usuario(req, res);
        case 'GET':
            return await buscar_usuario(req, res);
    }
}
    const guardar_usuario = async (req, res) => {
        console.log('creando usuario')
        console.log(req.body)
        const { nombre, apellido, dni, mail, direccion, obra_social } = req.body;
        const [result] = await pool.query('INSERT INTO datos SET ?', {
            nombre,
            apellido,
            dni,
            mail,
            direccion,
            obra_social,
        });
        return res.status(200).json({ nombre, apellido, dni, mail, direccion, obra_social, id: result.insertId });
    }
    const buscar_usuario = async (req, res) => {
        const [result] = await pool.query('SELECT * FROM datos');
        return res.status(200).json(result);
    }