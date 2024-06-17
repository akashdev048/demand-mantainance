import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ScatterGraph = () => {
  const chartData = {
    series: [
        {
            name: 'SAMPLE A',
            data: [
              [0, 500], [2.5, 575], [2.4, 1000], [3.0, 1250], [10.9, 1750], [27.1, 2200], [24.5, 2550], [27.1, 3300], [29.9, 1759], [27.1, 400], [22.1, 2222],
            ],
          },
          {
            name: 'SAMPLE B',
            data: [
              [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12],
            ],
          },
    ],
    options: {
      chart: {
        height: 350,
        type: 'scatter',
      },
      tooltip: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      grid: {
        borderColor: '#f1f1f1',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      annotations: {
        xaxis: [
          {
            x: 18.1,
            borderColor: '#000',
            label: {
              position: 'top',
              style: {
                fontSize: '12px',
                color: '#000',
                background: '#fff',
              },
            },
            strokeDashArray: [], // Set this to an empty array for a solid line
          },
        ],
        yaxis: [
          {
            y: 2000,
            borderColor: '#000',
            label: {
              position: 'right',
              style: {
                fontSize: '12px',
                color: '#000',
                background: '#fff',
              },
            },
            strokeDashArray: [], // Set this to an empty array for a solid line
          },
        ],
      },
    },
  };

  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="scatter" height={350} />
    </div>
  );
};

export default ScatterGraph;