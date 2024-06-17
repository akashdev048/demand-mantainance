import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './index.scss';

const DonutGraph = () => {
  const chartData = {
    series: [80],
    labels: ['Anti-flu'],
  };

  const remainingValue = 100 - chartData.series[0];

  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: chartData.labels,
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false, 
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
    colors: ['#75C1FE', '#C4CACD'], 

  };

  return (
    <div>
      <ReactApexChart
        options={chartOptions}
        series={[chartData.series[0], remainingValue]}
        type="donut"
        height={120}
        width={200}
      />
      <div className="series-number">
        {chartData.series[0]}
      </div>
    </div>
  );
};

export default DonutGraph;
