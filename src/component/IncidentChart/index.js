import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts"

const IncidentChart = () => {

    const [donutSeries, setDonutSeries] = useState([369, 532, 638]);

    const [donutOptions, setDonutOptions] = useState(
        {
            chart: {
                type: 'donut',
            },
            toolbar: {
                show: true
            },
            legend: {
                show: false,
                position: 'bottom',
            },
            labels: ['FATALITIES', 'LOST TIME INJURIES', 'RECORDABLE INJURIES'],
            colors: ['#FED3BE', '#FEA379', '#CB9762' ],

            dataLabels: {
                formatter: function (val) {
                  const percent = (val/1);
                  return percent.toFixed(0)
                }
            },

            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    );


    return (
        <div>
            <ReactApexChart options={donutOptions} series={donutSeries} height={200}  type="donut" />
        </div>

    );

}

export default IncidentChart;
