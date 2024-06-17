import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineGraph = () => {
  const options = {
    chart: {
      id: 'basic-line',
      toolbar: {
        show: false, 
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
      ],
    },
    yaxis: {
      labels: {
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
  };

  const series = [
    {
      name: 'pv',
      data: [1,10,20,8,15,9],
      strokeWidth: 1, 

    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={250}
      />
    </div>
  );
};

export default LineGraph;
