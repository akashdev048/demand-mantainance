import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineGraph = ({ data }) => {

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
      // min: 9,
      // max: 12,
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
      data: data,
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
