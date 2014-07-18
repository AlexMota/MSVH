$(function () {
        $('#pressao').highcharts({

            exporting:{
                enabled:false
            },
            credits:{
                enabled: false
            },
            title: {
                text: 'Pressão Arterial (mmHg)',
                x: -20 //center
            },
            
            xAxis: {
                title: {
                    text: 'Horas'
                },
                categories: ['07', '08', '09', '10', '11', '12', '13', 
                '14', '15', '16', '17', '18', '19', '20', '21', '22', 
                '23', '00', '01', '02', '03', '04', '05', '06']
            },
            yAxis: {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                valueSuffix: 'mmHg',
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            series: [{
                name: 'Pressão arterial sistólica',
                data: [110, 150, 130, 140, 150, 120, 130, 160, 170, 190, 210, 190, 180, 190, 200, 190, 180, 170, 150, 160, 180, 160, 150, 140]
            }, {
                name: 'Pressão arterial diastólica',
                data: [75, 90, 85, 90, 80, 95, 100, 105, 110, 95, 85, 90, 80, 75, 100, 90, 80, 95, 85, 80, 70, 75, 80, 100]
            }, {
                name: 'Pressão arterial média',
                data: [86, 110, 100, 95, 93, 90, 95, 92, 85, 90, 100, 120, 110, 105, 90, 95, 85, 80, 95, 100, 110, 95, 85, 90]
            }]
        });
    });




$(function () {
        $('#pressaoVenosaEabominal').highcharts({

            exporting:{
                enabled:false
            },
            credits:{
                enabled: false
            },
            title: {
                text: 'PVC e PIA (cmH2O)',
                x: -20 //center
            },
            
            xAxis: {
                title: {
                    text: 'Horas'
                },
                categories: ['07', '08', '09', '10', '11', '12', '13', 
                '14', '15', '16', '17', '18', '19', '20', '21', '22', 
                '23', '00', '01', '02', '03', '04', '05', '06']
            },
            yAxis: {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                valueSuffix: 'cmH2O',
                shared: true
                
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            series: [{
                name: 'Pressão venosa central',
                data: [5, 8, 7, 4, 3, 2, 3, 5, 6, 8, 8, 8, 8, 7, 5, 2, 3, 4, 5, 3, 4, 6, 5, 7]
            }, {
                name: 'Pressão intra-abdominal',
                data: [9, 8, 5, 6, 7, 8, 10, 10, 10, 9, 9, 6, 5, 3, 4, 5, 6, 6, 7, 8, 8, 8, 9, 9]
            }]
        });
    });


            $(function () {
        $('#frequenciaCardiaca').highcharts({

            exporting:{
                enabled:false
            },
            credits:{
                enabled: false
            },
            title: {
                text: 'Frequência Cardíaca (bpm)',
                x: -20 //center
            },
            
            xAxis: {
                title: {
                    text: 'Horas'
                },
                categories: ['07', '08', '09', '10', '11', '12', '13', 
                '14', '15', '16', '17', '18', '19', '20', '21', '22', 
                '23', '00', '01', '02', '03', '04', '05', '06']
            },
            yAxis: {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {

                valueSuffix: 'bpm'
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            series: [{
                name: 'Frequência Cardíaca',
                data: [49, 55, 57, 56, 55, 58, 60, 59, 58, 60, 65, 68, 70, 73, 71, 68, 65, 63, 60, 57, 56, 55, 52, 55]
            }]
        });
    });




            $(function () {
        $('#temperaturaCorporea').highcharts({

            exporting:{
                enabled:false
            },
            credits:{
                enabled: false
            },
            title: {
                text: 'Temperatura Corpórea (°C)',
                x: -20 //center
            },
            
            xAxis: {
                title: {
                    text: 'Horas'
                },
                categories: ['07', '08', '09', '10', '11', '12', '13', 
                '14', '15', '16', '17', '18', '19', '20', '21', '22', 
                '23', '00', '01', '02', '03', '04', '05', '06']
            },
            yAxis: {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {

                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            series: [{
                name: 'Temperatura Corpórea',
                data: [36.1, 36.1, 36.3, 36.2, 36.1, 36, 35.9, 36, 36.1, 36.5, 36.7, 36.8, 36.8, 36.8, 37, 37.2, 37.3, 37.5, 36.9, 36.5, 36.4, 36.4, 36.5, 36.6]
            }]
        });
    });


            $(function () {
        $('#frequenciaRespiratoria').highcharts({

            exporting:{
                enabled:false
            },
            credits:{
                enabled: false
            },
            title: {
                text: 'Frequência Respiratória (ipm)',
                x: -20 //center
            },
            
            xAxis: {
                title: {
                    text: 'Horas'
                },
                categories: ['07', '08', '09', '10', '11', '12', '13', 
                '14', '15', '16', '17', '18', '19', '20', '21', '22', 
                '23', '00', '01', '02', '03', '04', '05', '06']
            },
            yAxis: {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {

                valueSuffix: 'ipm'
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            series: [{
                name: 'Frequência Respiratória',
                data: [15, 13, 12, 13, 13, 14, 14, 13, 12, 15, 16, 15, 13, 17, 18, 12, 13, 15, 17, 18, 15, 16, 13, 12]
            }]
        });
    });


            $(function () {
        $('#glicemia').highcharts({

            exporting:{
                enabled:false
            },
            credits:{
                enabled: false
            },
            title: {
                text: 'Glicemia (mg/dl)',
                x: -20 //center
            },
            
            xAxis: {
                title: {
                    text: 'Horas'
                },
                categories: ['07', '08', '09', '10', '11', '12', '13', 
                '14', '15', '16', '17', '18', '19', '20', '21', '22', 
                '23', '00', '01', '02', '03', '04', '05', '06']
            },
            yAxis: {
                title: {
                    text: null
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {

                valueSuffix: 'mg/dl'
            },
            legend: {
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                borderWidth: 0
            },
            series: [{
                name: 'Glicemia',
                data: [55, 55, 54, 57, 60, 62, 61, 56, 70, 75, 72, 73, 80, 75, 74, 73, 65, 62, 59, 68, 76, 82, 75, 68]
            }]
        });
    });