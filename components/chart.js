import { Line } from 'react-chartjs-2'

export default function Chart({ data, date, base }) {
    const data1 = {
        labels: date,
        datasets: [
            {
                label: base.ccy,
                data: data.map(item => item.rate),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: Math.min(...data.map(item => item.rate)) - 1,
                    suggestedMax: Math.max(...data.map(item => item.rate)) + 1,
                }
            }]
        }
    }
    return (
        <Line data={data1} options={options} />
    )
}