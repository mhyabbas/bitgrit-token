Highcharts.chart('chart-distribution', {
    chart: {
        type: 'pie',
        marginRight: 20
    },
    colors: [
    '#924CCC', '#efe9f4', '#2a0e4f', '#5a2f8a', '#d8dde2', '#70399f', '#b2bbc6', '#565a5e', '#090811'
    ],
    title: {
        text: null,
    },
    subtitle: {
        text: null,
    },
    plotOptions: {
        pie: {
            cursor: 'pointer',
            dataLabels: {
                connectorWidth: 0,
                style: {
                    color: '#924CCC',
                    textOverflow: 'clip',
                },
                formatter: function() {
                    return '<span style="white-space: normal; display: inline-block; font-size: 14px; width: 100%; text-align: center;">' + this.y +
                    '%</span><br><span style="white-space: normal; display: inline-block; margin-bottom: 12px; font-size: 10px; font-weight: normal; width: 100%; text-align: center;">' + this.point.name + '</span>';
                },
                useHTML: true
            },
            size: '70%'
        }
    },
    credits: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    series: [{
        innerSize: '80%',
        colorByPoint: true,
        data: [{
            name: 'Reserve Pool',
            y: 30,
        }, {
            name: 'Ecosystem Reserve',
            y: 20
        }, {
            name: 'Team',
            y: 16
        }, {
            name: 'Data Science Community',
            y: 10
        }, {
            name: "Partner's Pool",
            y: 6
        }, {
            name: 'Private Sale',
            y: 5.07
        }, {
            name: 'Community Events',
            y: 5
        }, {
            name: 'Advisors',
            y: 4.93
        }, {
            name: 'Bounty',
            y: 3
        }]
    }]
});

Highcharts.chart('chart-release', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
        marginRight: 25
    },
    colors: [
    '#EFE9F4', '#E2D7EC', '#C5AFD9', '#A988C5', '#8C60B2', '#6F389F', '#5A2E8A', '#462B6F' , '#382457'
    ],
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['0', '0.5 year', '1 year', '1.5 years', '2 years', '2.5 years', '3 years'],
        title: {
            enabled: false
        },
        labels: {
            style: {
                color: 'white'
            },
        }
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            style: {
                color: 'white'
            },
            formatter: function () {
                return this.value+"%";
            }
        },
        gridLineWidth: 0,
        max: 100
    },
    tooltip: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            enableMouseTracking: false,
            events: {
                legendItemClick: function(event) {
                    if (!this.visible)
                        return false;

                    var seriesIndex = this.index;
                    var series = this.chart.series;

                    for (var i = 0; i < series.length; i++)
                    {
                        if (series[i].index != seriesIndex)
                        {
                            series[i].visible ?
                            series[i].setVisible(false, false) :
                            series[i].setVisible(true, false);
                        } 
                    }
                    this.chart.redraw();
                    return false;
                }
            }
        },
        column: {
            stacking: 'normal',
            lineWidth: 0,
            marker: {
                enabled: false,
                states:{
                    hover:{
                        enabled:false
                    }
                }
            }
        },
        line: {
            stacking: 'normal',
            marker: {
                enabled: false,
                states:{
                    hover:{
                        enabled:false
                    }
                }
            }
        }
    },
    legend: {
        symbolHeight: 10,
        symbolWidth: 10,
        symbolRadius: 0,
        itemStyle: {
            color: 'white',
            fontWeight: 'normal',
            // 'cursor': 'default'
        },
        itemHoverStyle: 'white',
        itemDistance: 60,
        itemMarginBottom: 5
    },
    series: [{
        name: 'Private Sale',
        type: 'line',
        showInLegend: false,
        data: [0.5067, 1.2667, 2.0267, 2.7867, 3.5467, 4.3067, 5.0667]
    },{
        name: 'Advisors',
        type: 'line',
        showInLegend: false,
        data: [0, 0.4933, 1.48, 1.9733, 2.96, 3.9467, 4.9333]
    },{
        name: 'Team',
        type: 'line',
        showInLegend: false,
        data: [0, 1.6, 3.2, 6.4, 9.6, 12.8, 16]
    },{
        name: 'Reserve Pool',
        type: 'line',
        showInLegend: false,
        data: [3, 6, 10.5, 13.5, 18, 24, 30]
    },{
        name: 'Ecosystem Reserve',
        type: 'line',
        showInLegend: false,
        data: [2, 4, 7, 9, 12, 16, 20]
    },{
        name: 'Data Science Community',
        type: 'line',
        showInLegend: false,
        data: [1, 2, 3.5, 4.5, 6, 8, 10]
    },{
        name: "Partner's Pool",
        type: 'line',
        showInLegend: false,
        data: [0.6, 1.2, 2.1, 2.7, 3.6, 4.8, 6]
    },{
        name: 'Community Events',
        type: 'line',
        showInLegend: false,
        data: [0.5, 1, 1.75, 2.25, 3, 4, 5]
    },{
        name: 'Bounty',
        type: 'line',
        showInLegend: false,
        data: [0.3, 0.6, 1.05, 1.35, 1.8, 2.4, 3]
    },{
        name: 'Private Sale',
        type: 'column',
        data: [0.5067, 1.2667, 2.0267, 2.7867, 3.5467, 4.3067, 5.0667]
    },{
        name: 'Advisors',
        type: 'column',
        data: [0, 0.4933, 1.48, 1.9733, 2.96, 3.9467, 4.9333]
    },{
        name: 'Team',
        type: 'column',
        data: [0, 1.6, 3.2, 6.4, 9.6, 12.8, 16]
    },{
        name: 'Reserve Pool',
        type: 'column',
        data: [3, 6, 10.5, 13.5, 18, 24, 30]
    },{
        name: 'Ecosystem Reserve',
        type: 'column',
        data: [2, 4, 7, 9, 12, 16, 20]
    },{
        name: 'Data Science Community',
        type: 'column',
        data: [1, 2, 3.5, 4.5, 6, 8, 10]
    },{
        name: "Partner's Pool",
        type: 'column',
        data: [0.6, 1.2, 2.1, 2.7, 3.6, 4.8, 6]
    },{
        name: 'Community Events',
        type: 'column',
        data: [0.5, 1, 1.75, 2.25, 3, 4, 5]
    },{
        name: 'Bounty',
        type: 'column',
        data: [0.3, 0.6, 1.05, 1.35, 1.8, 2.4, 3]
    }]
});