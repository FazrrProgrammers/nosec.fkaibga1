export default function handler(req, res) {
    res.status(200).json({ active_connections: Math.floor(Math.random() * 5000) });
}
