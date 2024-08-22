import React from 'react';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right', 
            },
            tooltip: {
                enabled: true, 
            }
        },
        elements: {
            center: {
                text: `${data.total} Total`,
                fontStyle: 'Arial', 
                sidePadding: 15, 
            }
        }
    };

    return (
        <div className='my-2'>
            <Doughnut data={data} options={options}/>
        </div>
    );
};

export default DoughnutChart;
