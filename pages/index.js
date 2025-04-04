import { useEffect, useState } from "react";

export default function Home() {
    const [activeConnections, setActiveConnections] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/status");
            const data = await res.json();
            setActiveConnections(data.active_connections);
        };

        fetchData();
        const interval = setInterval(fetchData, 5000); // Update setiap 5 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: "center", fontSize: "20px", marginTop: "20px" }}>
            <p>Active connections: {activeConnections}</p>
        </div>
    );
}
