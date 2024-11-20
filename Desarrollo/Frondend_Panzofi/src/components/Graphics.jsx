import { useEffect, useState } from "react";
import { getAllUsers } from "../api/panzofi.api";
import { Line ,Bar, Pie,Doughnut } from "react-chartjs-2";
import {    Chart as ChartJS,
            CategoryScale,
            LinearScale,
            PointElement,
            LineElement,
            BarElement,
            ArcElement,
            Title,
            Tooltip,
            Legend
            } from "chart.js";
//libreria para graficas
        //npm install react-chartjs-2 chart.js
// Registra los elementos que usaremos en Chart.js
ChartJS.register(   CategoryScale,
                    LinearScale,
                    PointElement,
                    LineElement,
                    BarElement,
                    ArcElement,
                    Title,
                    Tooltip,
                    Legend
                    );

export function Graphics() {
        const [data, setData] = useState([]);
    
        useEffect(() => {
            async function Load_graphs() {
                const res = await getAllUsers();
                    if (Array.isArray(res.data)) {
                        setData(res.data);
                    } else {
                        setData([]);
                    }
            }
            Load_graphs();
        },[]);


        const chartData = {
            labels: data.map(user => user.nombre), //  nombre de usuarios
            datasets: [         // información que se va a usar
            {
                label: "Contador 1",
                data: data.map(user => user.contador1), // columa contador 1
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(75,192,192,0.2)"
            },
            {
                label: "Contador 2",
                data: data.map(user => user.contador2), // columa contador 2
                borderColor: "rgba(153,102,255,1)",
                backgroundColor: "rgba(153,102,255,0.2)"
            },
            ],
        };






        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: "right",
                    labels: {
                        font: {
                            size: 14,
                        },
                        color: "#333",
                    },
                },
            },
            cutout: "50%", // Solo para gráficos de dona
        };


        
        return (
            <div>
            <h2>Gráficas en Tabla</h2>
            <table border="1" style={{ width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Gráfica 1</th>
                        <th>Gráfica 2</th>
                        <th>Gráfica 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: "20px" }}>
                            <Line data={chartData} />
                        </td>
                        <td style={{ padding: "20px" }}>
                            <Bar data={chartData} />
                        </td>
                        <td style={{ padding: "20px" }}>
                            <Doughnut data={chartData} options={options} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
}