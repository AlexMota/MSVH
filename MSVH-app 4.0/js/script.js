$(document).on('pageshow', '#graficos', function(){    
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'pressao',
                
            },

            exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},


            title: {
                text : 'Pressão Arterial',
				x : -20 //center
            },
            
            xAxis : {
			title : {
				text : 'Horas'
			},
			categories : ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06']
		},
		yAxis : {
			title : {
				text : null
			},
			plotLines : [{
				value : 0,
				width : 1,
				color : '#808080'
			}]
		},
		tooltip : {

			pointFormat : '{series.name}: <b>{point.y}</b><br/>',

			shared : true

		},
            legend : {
			labelFormatter : function() {
				if (this.index == 0) {
					return 'Pressão Arterial Sistólica';
				} else if (this.index == 1) {
					return 'Pressão Arterial Diastólica';
				} else if (this.index == 2) {
					return 'Pressão Arteria Média'
				}
			},

			layout : 'vertical',
			align : 'center',
			verticalAlign : 'bottom',
			borderWidth : 0
		},
            series : [{

			name : 'PAS',
			data : [110, 150, 130, 140, 150, 120, 130, 160, 170, 190, 210, 190, 180, 190, 200, 190, 180, 170, 150, 160, 180, 160, 150, 140],
			tooltip : {
				valueSuffix : ' mmHg'
			}
		}, {

			name : 'PAD',
			data : [75, 90, 85, 90, 80, 95, 100, 105, 110, 95, 85, 90, 80, 75, 100, 90, 80, 95, 85, 80, 70, 75, 80, 100],
			tooltip : {
				valueSuffix : ' mmHg'
			}
		}, {

			name : 'PAM',
			data : [86, 110, 100, 95, 93, 90, 95, 92, 85, 90, 100, 120, 110, 105, 90, 95, 85, 80, 95, 100, 110, 95, 85, 90],
			tooltip : {
				valueSuffix : ' mmHg'
			}
		}]
        });
    });
    
});




$(document).on('pageshow', '#graficos', function(){    
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'saturacaoOxigenio',
                
            },

            exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

            
            title: {
                text : 'Sat. O2',
				x : -20 //center
            },
            
            xAxis : {
			title : {
				text : 'Horas'
			},
			categories : ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06']
		},
		yAxis : {
			title : {
				text : null
			},
			plotLines : [{
				value : 0,
				width : 1,
				color : '#808080'
			}]
		},
		tooltip : {

			pointFormat : '{series.name}: <b>{point.y}</b><br/>',

			shared : true

		},
            legend : {
			labelFormatter : function() {
				if (this.index == 0) {
					return 'Saturação de Oxigênio';
				} 
			},

			layout : 'vertical',
			align : 'center',
			verticalAlign : 'bottom',
			borderWidth : 0
		},
            series : [{
			name : 'Sat. O2',
			data : [5, 8, 7, 4, 3, 2, 3, 5, 6, 8, 8, 8, 8, 7, 5, 2, 3, 4, 5, 3, 4, 6, 5, 7],
			tooltip : {
				valueSuffix : ' %'
			}
		}]
        });
    });
    
});




$(document).on('pageshow', '#graficos', function(){    
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'frequenciaCardiaca',
                
            },

            exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

            
            title: {
                text : 'Frequência Cardíaca',
				x : -20 //center
            },
            
            xAxis : {
			title : {
				text : 'Horas'
			},
			categories : ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06']
		},
		yAxis : {
			title : {
				text : null
			},
			plotLines : [{
				value : 0,
				width : 1,
				color : '#808080'
			}]
		},
		tooltip : {

			pointFormat : '{series.name}: <b>{point.y}</b><br/>',

			shared : true

		},
            legend : {
			labelFormatter : function() {
				if (this.index == 0) {
					return 'Frequência Cardíaca';
				}
			},

			layout : 'vertical',
			align : 'center',
			verticalAlign : 'bottom',
			borderWidth : 0
		},
            series : [{
			name : 'FC',
			data : [49, 55, 57, 56, 55, 58, 60, 59, 58, 60, 65, 68, 70, 73, 71, 68, 65, 63, 60, 57, 56, 55, 52, 55]
		}]
        });
    });
    
});



$(document).on('pageshow', '#graficos', function(){    
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'temperaturaCorporea',
                
            },

            exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

            
            title: {
                text : 'Temperatura Corpórea',
				x : -20 //center
            },
            
            xAxis : {
			title : {
				text : 'Horas'
			},
			categories : ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06']
		},
		yAxis : {
			title : {
				text : null
			},
			plotLines : [{
				value : 0,
				width : 1,
				color : '#808080'
			}]
		},
		tooltip : {

			pointFormat : '{series.name}: <b>{point.y}</b><br/>',

			shared : true

		},
            legend : {
			labelFormatter : function() {
				if (this.index == 0) {
					return 'Temperatura Corpórea';
				}
			},

			layout : 'vertical',
			align : 'center',
			verticalAlign : 'bottom',
			borderWidth : 0
		},
            series : [{
			name : 'TC',
			data : [36.1, 36.1, 36.3, 36.2, 36.1, 36, 35.9, 36, 36.1, 36.5, 36.7, 36.8, 36.8, 36.8, 37, 37.2, 37.3, 37.5, 36.9, 36.5, 36.4, 36.4, 36.5, 36.6]
		}]
        });
    });
    
});



$(document).on('pageshow', '#graficos', function(){    
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'temperaturaCorporea',
                
            },

            exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

            
            title: {
                text : 'Temperatura Corpórea',
				x : -20 //center
            },
            
            xAxis : {
			title : {
				text : 'Horas'
			},
			categories : ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06']
		},
		yAxis : {
			title : {
				text : null
			},
			plotLines : [{
				value : 0,
				width : 1,
				color : '#808080'
			}]
		},
		tooltip : {

			pointFormat : '{series.name}: <b>{point.y}</b><br/>',

			shared : true

		},
            legend : {
			labelFormatter : function() {
				if (this.index == 0) {
					return 'Temperatura Corpórea';
				}
			},

			layout : 'vertical',
			align : 'center',
			verticalAlign : 'bottom',
			borderWidth : 0
		},
            series : [{
			name : 'TC',
			data : [36.1, 36.1, 36.3, 36.2, 36.1, 36, 35.9, 36, 36.1, 36.5, 36.7, 36.8, 36.8, 36.8, 37, 37.2, 37.3, 37.5, 36.9, 36.5, 36.4, 36.4, 36.5, 36.6]
		}]
        });
    });
    
});


$(document).on('pageshow', '#graficos', function(){    
    var chart;
    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'frequenciaRespiratoria',
                
            },

            exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

            
            title: {
                text : 'Frequência Respiratória',
				x : -20 //center
            },
            
            xAxis : {
			title : {
				text : 'Horas'
			},
			categories : ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06']
		},
		yAxis : {
			title : {
				text : null
			},
			plotLines : [{
				value : 0,
				width : 1,
				color : '#808080'
			}]
		},
		tooltip : {

			pointFormat : '{series.name}: <b>{point.y}</b><br/>',

			shared : true

		},
            legend : {
			labelFormatter : function() {
				if (this.index == 0) {
					return 'Frequência Respiratória';
				}
			},

			layout : 'vertical',
			align : 'center',
			verticalAlign : 'bottom',
			borderWidth : 0
		},
            series : [{
			name : 'FR',
			data : [15, 13, 12, 13, 13, 14, 14, 13, 12, 15, 16, 15, 13, 17, 18, 12, 13, 15, 17, 18, 15, 16, 13, 12]
		}]
        });
    });
    
});






/*
$(function() {
	$('#glicemia').highcharts({

		exporting : {
			enabled : false
		},
		credits : {
			enabled : false
		},
		title : {
			text : 'Glicemia',
			x : -20 //center
		},

		xAxis : {
			title : {
				text : 'Horas'
			},
			categories : ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06']
		},
		yAxis : {
			title : {
				text : null
			},
			plotLines : [{
				value : 0,
				width : 1,
				color : '#808080'
			}]
		},
		tooltip : {

			valueSuffix : 'mg/dl'
		},
		legend : {
			labelFormatter : function() {
				if (this.index == 0) {
					return 'Glicemia';
				}
			},
			layout : 'vertical',
			align : 'center',
			verticalAlign : 'bottom',
			borderWidth : 0
		},
		series : [{
			name : 'Glic.',
			data : [55, 55, 54, 57, 60, 62, 61, 56, 70, 75, 72, 73, 80, 75, 74, 73, 65, 62, 59, 68, 76, 82, 75, 68]
		}]
	});
});

$(document).on('pageinit', '#init', function() {
	setTimeout(function() {
		$.mobile.changePage("#pacientes", "fade");
	}, 4000);
});

$(function() {

	$('#botaoAlarme').click(function() {
		var botao = document.getElementById("botaoAlarme");
		var icone = botao.getAttribute("data-icon");

		switch(icone) {
			case "alarm":
				botao.setAttribute('data-icon', "alarm-off");
				$(this).buttonMarkup({
					icon : "alarm-off"
				});
				break;

			case "alarm-off":
				botao.setAttribute('data-icon', "alarm");
				$(this).buttonMarkup({
					icon : "alarm"
				});
				break;

		}

	});

});

*/

$(function() {

	$('#monFreqCard').click(function() {

		var botaoFC = document.getElementById("btFreqCar");
		botaoFC.classList.add("ui-btn-active");
		botaoFC.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'flex');



	});

});


$(function() {

	$('#btFreqCar').click(function() {

		var botaoFC = document.getElementById("btFreqCar");
		botaoFC.classList.add("ui-btn-active");
		botaoFC.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'flex');



	});

});


$(function() {

	$('#monFreqResp').click(function() {

		var botaoFR = document.getElementById("btFreqResp");
		botaoFR.classList.add("ui-btn-active");
		botaoFR.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'flex');

	});

});



$(function() {

	$('#btFreqResp').click(function() {

		var botaoFR = document.getElementById("btFreqResp");
		botaoFR.classList.add("ui-btn-active");
		botaoFR.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'flex');

	});

});


$(function() {

	$('#monTempCorp').click(function() {

		var botaoTC = document.getElementById("btTempCorp");
		botaoTC.classList.add("ui-btn-active");
		botaoTC.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');
		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');
		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'flex');

	});

});



$(function() {

	$('#btTempCorp').click(function() {

		var botaoTC = document.getElementById("btTempCorp");
		botaoTC.classList.add("ui-btn-active");
		botaoTC.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');
		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');
		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'flex');

	});

});



$(function() {

	$('#monSatOxig').click(function() {

		var botaoSO = document.getElementById("btSatOxig");
		botaoSO.classList.add("ui-btn-active");
		botaoSO.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'flex');

	});

});



$(function() {

	$('#btSatOxig').click(function() {

		var botaoSO = document.getElementById("btSatOxig");
		botaoSO.classList.add("ui-btn-active");
		botaoSO.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btPressaoArt').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btPressaoArt').classList.remove('ui-state-persist');

		$('#pressao').css('display', 'none');
		$('#frequenciaCardiaca').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'flex');

	});

});



$(function() {

	$('#monPressaoArt').click(function() {

		var botaoPA = document.getElementById("btPressaoArt");
		botaoPA.classList.add("ui-btn-active");
		botaoPA.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');

		$('#frequenciaCardiaca').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#pressao').css('display', 'flex');

	});

});


$(function() {

	$('#btPressaoArt').click(function() {

		var botaoPA = document.getElementById("btPressaoArt");
		botaoPA.classList.add("ui-btn-active");
		botaoPA.classList.add("ui-state-persist");
		//console.log(botao);

		document.getElementById('btFreqCar').classList.remove('ui-btn-active');
		document.getElementById('btTempCorp').classList.remove('ui-btn-active');
		document.getElementById('btFreqResp').classList.remove('ui-btn-active');
		document.getElementById('btSatOxig').classList.remove('ui-btn-active');

		document.getElementById('btFreqCar').classList.remove('ui-state-persist');
		document.getElementById('btTempCorp').classList.remove('ui-state-persist');
		document.getElementById('btFreqResp').classList.remove('ui-state-persist');
		document.getElementById('btSatOxig').classList.remove('ui-state-persist');

		$('#frequenciaCardiaca').css('display', 'none');
		$('#saturacaoOxigenio').css('display', 'none');
		$('#frequenciaRespiratoria').css('display', 'none');
		$('#temperaturaCorporea').css('display', 'none');
		$('#pressao').css('display', 'flex');

	});

});




$(function() {
	$('#aviso-sonoro').change(function() {
		if (($(this).val()) == 'off') {
			$("#volume").slider({
				disabled : true
			});
		}
		if (($(this).val()) == 'on') {
			$("#volume").slider({
				disabled : false
			});
		}
	});
});

