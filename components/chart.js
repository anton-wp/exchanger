import { Line } from 'react-chartjs-2'

export default function Chart({ data, base }) {
  const state = {
    labels: data.map(item => item.exchangedate),
    datasets: [
      {
        label: base.cc,
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
          suggestedMin: Math.min(...data.map(item => item.rate)) - Math.min(...data.map(item => item.rate)) * 0.01,
          suggestedMax: Math.max(...data.map(item => item.rate)) + Math.max(...data.map(item => item.rate)) * 0.01,
        }
      }]
    }
  }
  return (
    <Line data={state} options={options} />
  )
}
