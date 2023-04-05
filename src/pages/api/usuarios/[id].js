import { pool } from '../../../../config/db'
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return await getUsuario(req, res);
        case 'DELETE':
            return await deleteUsuario(req, res);
        case 'PUT':
            return await updateUsuario(req, res);
        default:
            break
    }
}

const getUsuario = async (req, res) => {
    const { id } = req.query;
    const [result] = await pool.query('SELECT * FROM datos WHERE id = ?', [id]);
    return res.status(200).json(result[0]);
}

const deleteUsuario = async (req, res) => {
    const { id } = req.query;
    const result = await pool.query('DELETE FROM datos WHERE id = ?', [id]);
    return res.status(204).json();
}

const updateUsuario = async (req, res) => {
    const { id } = req.query;
    const { nombre, apellido, dni, mail, direccion, obra_social } = req.body;
    const query = 'UPDATE datos SET ? WHERE id=?';
    try {
        await pool.query(query, [
            req.body,
            req.query.id,
        ]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}