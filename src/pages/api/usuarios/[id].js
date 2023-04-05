export default function handler(req, res){
    console.log(`${req.method}ING ${req.query.id}`);
    return res.status(200).json(`buscando usuario: ${req.query.id}`);
}