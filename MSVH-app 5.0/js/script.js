$(document).on('pageshow', '#graficos', function() {
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
			chart : {
				renderTo : 'pressao',

			},

			exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

			title : {
				text : null,
			},

			xAxis : {
				title : {
					text : null
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
				formatter : function() {
					var s = '<b>' + this.x + 'hrs</b>';

					$.each(this.points, function() {
						s += '<br/>' + this.series.name + ': ' + this.y + ' mmHg';
					});

					return s;
				},
				shared : true
			},
			legend : {
				labelFormatter : function() {
					if (this.index == 0) {
						return 'PAS';
					} else if (this.index == 1) {
						return 'PAD';
					} else if (this.index == 2) {
						return 'PAM'
					}
				},

				layout : 'horizontal',
				align : 'center',
				verticalAlign : 'bottom',
				margin : -2

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

$(document).on('pageshow', '#graficos', function() {
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
			chart : {
				renderTo : 'saturacaoOxigenio',

			},

			exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

			title : {
				text : null,
			},

			xAxis : {
				title : {
					text : null
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

				formatter : function() {
					var s = '<b>' + this.x + 'hrs</b>';

					$.each(this.points, function() {
						s += '<br/>' + this.series.name + ': ' + this.y + ' %';
					});

					return s;
				},

				shared : true

			},
			legend : {
				labelFormatter : function() {
					if (this.index == 0) {
						return 'SaO2';
					}
				},

				layout : 'vertical',
				align : 'center',
				verticalAlign : 'bottom',
				margin : -2
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

$(document).on('pageshow', '#graficos', function() {
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
			chart : {
				renderTo : 'frequenciaCardiaca',

			},

			exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

			title : {
				text : null,
			},

			xAxis : {
				title : {
					text : null
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

				formatter : function() {
					var s = '<b>' + this.x + 'hrs</b>';

					$.each(this.points, function() {
						s += '<br/>' + this.series.name + ': ' + this.y + ' bpm';
					});

					return s;
				},

				shared : true

			},
			legend : {
				labelFormatter : function() {
					if (this.index == 0) {
						return 'FC';
					}
				},

				layout : 'vertical',
				align : 'center',
				verticalAlign : 'bottom',
				margin : -2
			},
			series : [{
				name : 'FC',
				data : [49, 55, 57, 56, 55, 58, 60, 59, 58, 60, 65, 68, 70, 73, 71, 68, 65, 63, 60, 57, 56, 55, 52, 55]
			}]
		});
	});

});

$(document).on('pageshow', '#graficos', function() {
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
			chart : {
				renderTo : 'temperaturaCorporea',

			},

			exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

			title : {
				text : null,
			},

			xAxis : {
				title : {
					text : null
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

				formatter : function() {
					var s = '<b>' + this.x + 'hrs</b>';

					$.each(this.points, function() {
						s += '<br/>' + this.series.name + ': ' + this.y + ' °C';
					});

					return s;
				},

				shared : true

			},
			legend : {
				labelFormatter : function() {
					if (this.index == 0) {
						return 'TC';
					}
				},

				layout : 'vertical',
				align : 'center',
				verticalAlign : 'bottom',
				margin : -2
			},
			series : [{
				name : 'TC',
				data : [36.1, 36.1, 36.3, 36.2, 36.1, 36, 35.9, 36, 36.1, 36.5, 36.7, 36.8, 36.8, 36.8, 37, 37.2, 37.3, 37.5, 36.9, 36.5, 36.4, 36.4, 36.5, 36.6]
			}]
		});
	});

});

$(document).on('pageshow', '#graficos', function() {
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
			chart : {
				renderTo : 'temperaturaCorporea',

			},

			exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

			title : {
				text : null,
			},

			xAxis : {

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

				formatter : function() {
					var s = '<b>' + this.x + 'hrs</b>';

					$.each(this.points, function() {
						s += '<br/>' + this.series.name + ': ' + this.y + ' °C';
					});

					return s;
				},

				shared : true

			},
			legend : {
				labelFormatter : function() {
					if (this.index == 0) {
						return 'TC';
					}
				},

				layout : 'vertical',
				align : 'center',
				verticalAlign : 'bottom',
				margin : -2
			},
			series : [{
				name : 'TC',
				data : [36.1, 36.1, 36.3, 36.2, 36.1, 36, 35.9, 36, 36.1, 36.5, 36.7, 36.8, 36.8, 36.8, 37, 37.2, 37.3, 37.5, 36.9, 36.5, 36.4, 36.4, 36.5, 36.6]
			}]
		});
	});

});

$(document).on('pageshow', '#graficos', function() {
	var chart;
	$(document).ready(function() {
		chart = new Highcharts.Chart({
			chart : {
				renderTo : 'frequenciaRespiratoria',

			},

			exporting : {
				enabled : false
			},
			credits : {
				enabled : false
			},

			title : {
				text : null,
			},

			xAxis : {
				title : {
					text : null
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

				formatter : function() {
					var s = '<b>' + this.x + 'hrs</b>';

					$.each(this.points, function() {
						s += '<br/>' + this.series.name + ': ' + this.y + ' mpm';
					});

					return s;
				},

				shared : true

			},
			legend : {
				labelFormatter : function() {
					if (this.index == 0) {
						return 'FR';
					}
				},

				layout : 'vertical',
				align : 'center',
				verticalAlign : 'bottom',
				margin : -2
			},
			series : [{
				name : 'FR',
				data : [15, 13, 12, 13, 13, 14, 14, 13, 12, 15, 16, 15, 13, 17, 18, 12, 13, 15, 17, 18, 15, 16, 13, 12]
			}]
		});
	});

});

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

	$('#monGraficos').click(function() {

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

$(document).on('pageinit', '#pacientes', function() {

	var pacientesJson = [];

	$.getJSON('https://intense-sled-740.appspot.com/_ah/api/jsonmsvh/v1/pacientes', function(data) {
		pacientesJson = data.items;

		for ( i = 0; i < pacientesJson.length; i++) {
			//botao icone

			if (pacientesJson[i].sexo == "feminino") {
				listItem = '<li class="paciente" id="pac'+i+'"><a href="#monitor"><img src="img/paciente-fem.png"/><h3>' + pacientesJson[i].nome + '</h3><p>' + pacientesJson[i].uti + '</p></a><a href="" data-role="icon" data-icon="alarm" data-mini="true" class="alarme"></a></li>';
			} else if (pacientesJson[i].sexo == "masculino") {
				listItem = '<li class="paciente" id="pac'+i+'"><a href="#monitor"><img src="img/paciente-mas.png"/><h3>' + pacientesJson[i].nome + '</h3><p>' + pacientesJson[i].uti +'</p></a><a href="" data-role="icon" data-icon="alarm" data-mini="true" class="alarme"></a></li>';
			}
			$('#listap').append(listItem)
		}
		$("#listap").listview("refresh");

		

	});

});


$(function() {

	$('#listap').on('click', '.paciente', function(event) {
		
		var id = $(this).attr("id");
		var numId = parseInt(id.substring(3, id.length));

		var pacientesJson = [];

	$.getJSON('https://intense-sled-740.appspot.com/_ah/api/jsonmsvh/v1/pacientes', function(data) {

		pacientesJson = data.items;
		var nome = pacientesJson[numId].nome;
		var idade = pacientesJson[numId].idade;
		var numProntuario = pacientesJson[numId].prontuario;
		var uti = pacientesJson[numId].uti;
		var leito = pacientesJson[numId].leito;
		var descricao = pacientesJson[numId].descricao;

		var dias = pacientesJson[numId].diasMonitorados;
		var dataMaisRecente = pacientesJson[numId].diasMonitorados[dias.length-1].data;
		var horas = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras;
		var horaMaisRecente = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].hora;

		var tc = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].temperaturaCorporea;
		var pas = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].pressaoSistolica;
		var pad = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].pressaoDiastolica;
		var pam = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].pressaoMedia;
		var sato2 = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].saturacaoOxigenio;
		var fc = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].frequenciaCardiaca;
		var fr = pacientesJson[numId].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].frequenciaRespiratoria;

		$("#nomeMonitor").html('<img  src="jquerymobile-files/images/icons-png/user-white.png"/> '+nome+'');
		$("#utiMonitor").html('<img src="jquerymobile-files/images/icons-png/location-white.png"/> '+uti+'');
		$("#idadeMonitor").html('<img src="jquerymobile-files/images/icons-png/star-white.png"/> '+idade+'');
		$("#leitoMonitor").html('<img src="jquerymobile-files/images/icons-png/plus-white.png"/> Leito '+leito+'');
		$("#prontuarioMonitor").html('<img src="jquerymobile-files/images/icons-png/tag-white.png"/> N.P. '+numProntuario+'');
		$("#descricaoMonitor").html('<img src="jquerymobile-files/images/icons-png/edit-white.png"/> '+descricao+'');

		$("#monitorFC").html('<a id="monFreqCard" href="#graficos" class="" ><img src="img/heart.png"/></a><big><big><big>'+fc+'</big></big></big> bpm');
		$("#monitorFR").html('<a id="monFreqResp" href="#graficos"><img src="img/lung.png"/></a><big><big><big>'+fr+'</big></big></big> mpm');
		$("#monitorTC").html('<a id="monTempCorp" href="#graficos"><img src="img/thermometer.png"/></a><big><big><big>'+tc+'</big></big></big> ºC');
		$("#monitorSat").html('<a id="monSatOxig" href="#graficos"><img src="img/blood.png"/></a><big><big><big>'+sato2+'</big></big></big> %');
		$("#monitorPA").html('<a id="monPressaoArt" href="#graficos"><img src="img/blood pressure.png"/></a><big><big><big>'+pas+' / '+pad+' ('+pam+')</big></big></big> mmHg');



		
			});

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

$(document).on('pageinit', '#init', function() {
	setTimeout(function() {
		$.mobile.changePage("#pacientes", "fade");
	}, 4000);
});

$(function() {

	$('#listap').on('click', '.alarme', function(event) {
		var botao = $(this);
		var icone = botao.attr("data-icon");

		switch(icone) {
			case "alarm":
				botao.attr('data-icon', "alarm-off");
				$(this).buttonMarkup({
					icon : "alarm-off"
				});
				break;

			case "alarm-off":
				botao.attr('data-icon', "alarm");
				$(this).buttonMarkup({
					icon : "alarm"
				});
				break;

		}

	});

});

$(function() {

	$('#table-column-toggle').on('click', '.linha', function(event) {

		var hr = $(this).find('th').text();

		var fc = $(this).find('td:eq(0)').text();
		var fr = $(this).find('td:eq(1)').text();
		var t = $(this).find('td:eq(2)').text();
		var so2 = $(this).find('td:eq(3)').text();
		var pa = $(this).find('td:eq(4)').text();
		var pam = $(this).find('td:eq(5)').text();

		var $popup = $('#popupMonitor');
		var $hrPopup = $popup.find('h1');
		$hrPopup.text(hr + 'h')

		$popup.find('h3:eq(0)').text("Freq. Cardiaca: " + fc + " bpm");
		$popup.find('h3:eq(1)').text("Freq. Respiratoria: " + fr + " mpm");
		$popup.find('h3:eq(2)').text("Temp. Corporea: " + t + " ºC");
		$popup.find('h3:eq(3)').text("Sat. Oxigenio: " + so2 + " %");
		$popup.find('h3:eq(4)').text("Press. Arterial: " + pa + " (" + pam + ") mmHg");

		$popup.popup("open");

	});

});

$(document).on('pageinit', '#tabela', function() {

	var hora;
	for ( i = 0; i < 24; i++) {

		hora = i + 7;

		if (hora >= 24) {
			hora = hora - 24;
		}

		var linha = '<tr class="linha"><th>' + hora + '</th><td>45</td><td>38</td><td>39</td><td>74</td><td>24/24</td><td>24</td></tr>';

		$("table#table-column-toggle tbody").append(linha).closest("table#table-column-toggle").table("refresh").trigger("create");
	}
	$(".ui-table-columntoggle-btn").detach().appendTo('#bloco2');

});

