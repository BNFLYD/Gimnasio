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

let query = ``;

const getUsuario = async (req, res) => {
    try {
        const { id } = req.query;
        query = `SELECT * FROM datos WHERE id = ?`;
        const [result] = await pool.query(query, [id]);
        return res.status(200).json(result[0]);
    } catch (error) {
        
    }
}

const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.query;
    query = `DELETE FROM datos WHERE id = ?`;
    const result = await pool.query(query, [id]);
    return res.status(204).json();
    } catch (error) {
        
    }
}

const updateUsuario = async (req, res) => {
    const { id } = req.query;
    const { nombre, apellido, dni, mail, direccion, obra_social } = req.body;
    query = `UPDATE datos SET ? WHERE id=?`;
    try {
        await pool.query(query, [
            req.body,
            req.query.id
        ]);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
