var ds1 = [];
ds1.push({meta: 'Confome', value: 8});
ds1.push({meta: 'Confome', value: 12});
ds1.push({meta: 'Confome', value: 14});
ds1.push({meta: 'Confome', value: 13});

var ds2 = [];
ds2.push({meta: 'Nao onfome', value: 2});
ds2.push({meta: 'Nao Confome', value: 4});
ds2.push({meta: 'Nao Confome', value: 5});
ds2.push({meta: 'Nao Confome', value: 3});

var ds3 = [];
ds3.push({meta: 'Nao Confome Critico', value: 1});
ds3.push({meta: 'Nao Confome Critico', value: 2});
ds3.push({meta: 'Nao Confome Critico', value: 4});
ds3.push({meta: 'Nao Confome Critico', value: 6});

var chart = new Chartist.Bar('#ct_chart_7', {
    labels: ['01/2019', '02/2019', '03/2019', '04/2019'],
    series: [
        ds1,
        ds2,
        ds3
    ]
}, {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function (value) {
                return value % 1 == 0 ? value : null;
            }
        }, plugins: [
            Chartist.plugins.tooltip(),
            Chartist.plugins.legend({
                legendNames: ['Conforme', 'Não conforme', 'Não conforme critico', 'Critico']
            })
        ]
    }).on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });