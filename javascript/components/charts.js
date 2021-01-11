Highcharts.chart('chart-distribution', {
    chart: {
        type: 'pie',
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
                    return '<span style="display: inline-block; font-size: 14px; width: 100%; text-align: center;">' + this.y +
                    '%</span><br><span style="display: inline-block; margin-bottom: 12px; font-size: 10px; font-weight: normal; width: 100%; text-align: center;">' + this.point.name + '</span>';
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
            name: 'Ecosystsem Reserve',
            y: 20
        }, {
            name: 'Team',
            y: 16
        }, {
            name: 'Data Science Community',
            y: 10
        }, {
            name: 'Partners Pool',
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
        type: 'area',
        backgroundColor: 'transparent'
    },
    colors: [
    '#e8ecef', '#d8dde2', '#b2bbc6', '#efe9f4', '#924ccd', '#70399f', '#5a2f8a', '#2a0e4f' , '#090811'
    ],
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['0', '1 year', '2 years', '3 years'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        },
        labels: {
            style: {
                color: 'white'
            },
        },
        lineWidth: 0,
        showFirstLabel: false,
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
            pointPlacement: 'on'
        },
        area: {
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
        }
    },
    legend: {
        symbolHeight: 10,
        symbolWidth: 10,
        symbolRadius: 0,
        itemStyle: {
            color: 'white',
            fontWeight: 'normal'
        },
        itemHoverStyle: 'white',
        itemDistance: 60,
        itemMarginBottom: 5
    },
    series: [{
        name: 'Private Sale',
        data: [0.5067, 2.0267, 3.5467, 5.0667]
    },{
        name: 'Advisors',
        data: [0, 1.48, 2.96, 4.9333]
    },{
        name: 'Team',
        data: [0, 3.2, 9.6, 16]
    },{
        name: 'Reserve Pool',
        data: [3, 10.5, 18, 30]
    },{
        name: 'Ecosystem Reserve',
        data: [2, 7, 12, 20]
    },{
        name: 'Data Science Community',
        data: [1, 3.5, 6, 10]
    },{
        name: 'Partners Pool',
        data: [0.6, 2.1, 3.6, 6]
    },{
        name: 'Community Events',
        data: [0.5, 1.75, 3, 5]
    },{
        name: 'Bounty',
        data: [0.3, 1.05, 1.8, 3]
    }]
});