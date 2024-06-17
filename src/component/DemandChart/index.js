import React from "react";
import ReactApexChart from "react-apexcharts";

export default class DemandChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Net Imbalance',
                data: [-6, -4, -6, -5],
                color: "#c16a87",
            }, {
                name: 'Corrected Demand',
                data: [44, 55, 57, 56],
                color: "#a968bc",
            }, {
                name: 'Supply',
                data: [76, 85, 101, 98],
                color: "#35c5a7",
            }, {
                name: 'Forecasted Demand',
                data: [35, 41, 36, 26],
                color: "#3f5168",
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['transparent']
                },
                plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: '100%',
                      endingShape: 'rounded',
                    }
                  },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    title: {
                        text: 'Growth',
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "%";
                        }
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01',
                    ],
                    // labels: {
                    //     rotate: -90
                    // }
                },
                lagend: {
                    offsetY: 90,
                }
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={450} />
            </div>
        );
    }
}