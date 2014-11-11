//Variaveis globais
numIdPacAtual = 0;
pacientesJson = [];


$(document).on('pageshow', '#graficos', function() {
	var chart;
	var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
	var arrayDadosHora = pacientesJson[numIdPacAtual].diasMonitorados[arrayDiasMonitorados.length-1].dadosHoras;
	var arrayPAS = [];
	var arrayPAD = [];
	var arrayPAM = [];
	var arrayHoras = [];

	for(var i=0; i<arrayDadosHora.length; i++){
		arrayPAS.push([i, parseFloat(arrayDadosHora[i].pressaoSistolica)]);
		arrayPAD.push([i, parseFloat(arrayDadosHora[i].pressaoDiastolica)]);
		arrayPAM.push([i, parseFloat(arrayDadosHora[i].pressaoMedia)]);
		arrayHoras.push([arrayDadosHora[i].hora]);
	}

	



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
				categories : []
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
				data : [],
				tooltip : {
					valueSuffix : ' mmHg'
				}
			}, {

				name : 'PAD',
				data : [],
				tooltip : {
					valueSuffix : ' mmHg'
				}
			}, {

				name : 'PAM',
				data : [],
				tooltip : {
					valueSuffix : ' mmHg'
				}
			}]
		});

				
				

	});

				chart.series[0].setData(arrayPAS);
				chart.series[1].setData(arrayPAD);
				chart.series[2].setData(arrayPAM);
				chart.xAxis[0].setCategories(arrayHoras);

});

$(document).on('pageshow', '#graficos', function() {
	var chart;
	var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
	var arrayDadosHora = pacientesJson[numIdPacAtual].diasMonitorados[arrayDiasMonitorados.length-1].dadosHoras;
	var arraySAT = [];
	var arrayHoras = [];

	for(var i=0; i<arrayDadosHora.length; i++){
		arraySAT.push([i, parseFloat(arrayDadosHora[i].saturacaoOxigenio)]);
		arrayHoras.push([arrayDadosHora[i].hora]);
		
	}

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
				categories : []
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
				data : [],
				tooltip : {
					valueSuffix : ' %'
				}
			}]
		});
	});

			chart.series[0].setData(arraySAT);
			chart.xAxis[0].setCategories(arrayHoras);

});

$(document).on('pageshow', '#graficos', function() {
	var chart;
	var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
	var arrayDadosHora = pacientesJson[numIdPacAtual].diasMonitorados[arrayDiasMonitorados.length-1].dadosHoras;
	var arrayFC = [];
	var arrayHoras = [];

	for(var i=0; i<arrayDadosHora.length; i++){
		arrayFC.push([i, parseFloat(arrayDadosHora[i].frequenciaCardiaca)]);
		arrayHoras.push([arrayDadosHora[i].hora]);
		
	}


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
				categories : []
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
				data : []
			}]
		});
	});


			chart.series[0].setData(arrayFC);
			chart.xAxis[0].setCategories(arrayHoras);

});

$(document).on('pageshow', '#graficos', function() {
	var chart;
	var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
	var arrayDadosHora = pacientesJson[numIdPacAtual].diasMonitorados[arrayDiasMonitorados.length-1].dadosHoras;
	var arrayTC = [];
	var arrayHoras = [];

	for(var i=0; i<arrayDadosHora.length; i++){
		arrayTC.push([i, parseFloat(arrayDadosHora[i].temperaturaCorporea)]);
		arrayHoras.push([arrayDadosHora[i].hora]);
		
	}


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
				categories : []
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
				data : []
			}]
		});
	});

			chart.series[0].setData(arrayTC);
			chart.xAxis[0].setCategories(arrayHoras);

});



$(document).on('pageshow', '#graficos', function() {
	var chart;
	var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
	var arrayDadosHora = pacientesJson[numIdPacAtual].diasMonitorados[arrayDiasMonitorados.length-1].dadosHoras;
	var arrayFR = [];
	var arrayHoras = [];

	for(var i=0; i<arrayDadosHora.length; i++){
		arrayFR.push([i, parseFloat(arrayDadosHora[i].frequenciaRespiratoria)]);
		arrayHoras.push([arrayDadosHora[i].hora]);
		
	}

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
				categories : []
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
				data : []
			}]
		});
	});


			chart.series[0].setData(arrayFR);
			chart.xAxis[0].setCategories(arrayHoras);

});

$(function() {

	$('#monitorFC').on('click', 'a', function() {

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

	$('#monitorFR').on('click', 'a', function() {

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

	$('#monitorTC').on('click', 'a', function() {

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

	$('#monitorSat').on('click', 'a', function() {

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

	$('#monitorPA').on('click', 'a', function() {

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


$(function() {

	$('#listap').on('click', '.paciente', function(event) {
		
		var id = $(this).attr("id");
		numIdPacAtual = parseInt(id.substring(3, id.length));
		


		var nome = pacientesJson[numIdPacAtual].nome;
		var idade = pacientesJson[numIdPacAtual].idade;
		var numProntuario = pacientesJson[numIdPacAtual].prontuario;
		var uti = pacientesJson[numIdPacAtual].uti;
		var leito = pacientesJson[numIdPacAtual].leito;
		var descricao = pacientesJson[numIdPacAtual].descricao;

		var dias = pacientesJson[numIdPacAtual].diasMonitorados;
		var dataMaisRecente = pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].data;
		var horas = pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras;
		var horaMaisRecente = pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].hora;

		var tc = parseFloat(pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].temperaturaCorporea);
		var pas = parseFloat(pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].pressaoSistolica);
		var pad = parseFloat(pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].pressaoDiastolica);
		var calcPam = (pas - pad)/3 + pad;
		var pam = calcPam.toFixed(1);
		var sato2 = parseFloat(pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].saturacaoOxigenio);
		var fc = parseFloat(pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].frequenciaCardiaca);
		var fr = parseFloat(pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].frequenciaRespiratoria);

		$("#nomeMonitor").html('<img  src="jquerymobile-files/images/icons-png/user-white.png"/> '+nome+'');
		$("#utiMonitor").html('<img src="jquerymobile-files/images/icons-png/location-white.png"/> '+uti+'');
		$("#idadeMonitor").html('<img src="jquerymobile-files/images/icons-png/star-white.png"/> '+idade+'');
		$("#leitoMonitor").html('<img src="jquerymobile-files/images/icons-png/plus-white.png"/> Leito '+leito+'');
		$("#prontuarioMonitor").html('<img src="jquerymobile-files/images/icons-png/tag-white.png"/> N.P. '+numProntuario+'');
		$("#descricaoMonitor").html('<img src="jquerymobile-files/images/icons-png/edit-white.png"/> '+descricao+'');
		$("#dataHoraDados").html('<h1 align="center"><big><big>'+dataMaisRecente+' - '+horaMaisRecente+' hrs</big></big></h1>');


		if(fc < 60 || fc > 100){		
			$("#monitorFC").html('<a id="monFreqCard" href="#graficos"><img src="img/heart.png"/></a><big><big><big style="color: red">'+fc+'</big></big></big><small> bpm</small>');
		}else{
			$("#monitorFC").html('<a id="monFreqCard" href="#graficos"><img src="img/heart.png"/></a><big><big><big>'+fc+'</big></big></big><small> bpm</small>');
		}

		if(fr < 12 || fr > 20){
			$("#monitorFR").html('<a id="monFreqResp" href="#graficos"><img src="img/lung.png"/></a><big><big><big style="color: red">'+fr+'</big></big></big><small> mpm</small>');
		}else{
			$("#monitorFR").html('<a id="monFreqResp" href="#graficos"><img src="img/lung.png"/></a><big><big><big>'+fr+'</big></big></big><small> mpm</small>');
		}

		if(tc < 30 || tc > 37){
			$("#monitorTC").html('<a id="monTempCorp" href="#graficos"><img src="img/thermometer.png"/></a><big><big><big style="color: red">'+tc+'</big></big></big><small> ºC</small>');
		}else{
			$("#monitorTC").html('<a id="monTempCorp" href="#graficos"><img src="img/thermometer.png"/></a><big><big><big>'+tc+'</big></big></big><small> ºC</small>');
		}

		if(sato2 < 95){
			$("#monitorSat").html('<a id="monSatOxig" href="#graficos"><img src="img/blood.png"/></a><big><big><big style="color: red">'+sato2+'</big></big></big><small> %</small>');
		}else{
			$("#monitorSat").html('<a id="monSatOxig" href="#graficos"><img src="img/blood.png"/></a><big><big><big>'+sato2+'</big></big></big><small> %</small>');
		}


		if(pas < 90 || pas > 139){
			if(pad > 89){
				$("#monitorPA").html('<a id="monPressaoArt" href="#graficos"><img src="img/blood pressure.png"/></a><big><big><big style="color: red">'+pas+'/</big><big style="color: red">'+pad+' </big><big>('+pam+')</big></big></big><small> mmHg</small>');
			}else{
				$("#monitorPA").html('<a id="monPressaoArt" href="#graficos"><img src="img/blood pressure.png"/></a><big><big><big style="color: red">'+pas+'/</big><big>'+pad+' </big><big>('+pam+')</big></big></big><small> mmHg</small>');

			}
		}else{
			if(pad > 89){
				$("#monitorPA").html('<a id="monPressaoArt" href="#graficos"><img src="img/blood pressure.png"/></a><big><big><big>'+pas+'/</big><big style="color: red">'+pad+' </big><big>('+pam+')</big></big></big><small> mmHg</small>');
			}else{
				$("#monitorPA").html('<a id="monPressaoArt" href="#graficos"><img src="img/blood pressure.png"/></a><big><big><big>'+pas+'/</big><big>'+pad+' </big><big>('+pam+')</big></big></big><small> mmHg</small>');

			}

		}
		

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
		$('#selecionaData').change(function() {
		console.log($(this).val());
	});
});

$(document).on('pageinit', '#init', function() {
	
	$.getJSON('https://intense-sled-740.appspot.com/_ah/api/jsonmsvh/v1/pacientes', function(data) {
		pacientesJson = data.items;
		setTimeout(function() {
			$.mobile.changePage("#pacientes", "fade");
	}, 2000);		
	});	
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
		var pas = $(this).find('td:eq(4)').text();
		var pad = $(this).find('td:eq(5)').text();
		var pam = $(this).find('td:eq(6)').text();

		var $popup = $('#popupMonitor');
		var $hrPopup = $popup.find('h1');
		$hrPopup.text(hr + 'h')

		$popup.find('h3:eq(0)').text("Freq. Cardiaca: " + fc + " bpm");
		$popup.find('h3:eq(1)').text("Freq. Respiratoria: " + fr + " mpm");
		$popup.find('h3:eq(2)').text("Temp. Corporea: " + t + " ºC");
		$popup.find('h3:eq(3)').text("Sat. Oxigenio: " + so2 + " %");
		$popup.find('h3:eq(4)').text("Press. Arterial: " + pas +"/" + pad + " (" + pam + ") mmHg");

		$popup.popup("open");

	});

});

$(document).on('pageshow', '#tabela', function() {

	var posDiaAtual = pacientesJson[numIdPacAtual].diasMonitorados.length -1;
	var diaAtual = pacientesJson[numIdPacAtual].diasMonitorados[posDiaAtual];
	var dadoAtual;
	
	var hora;
	for ( i = 0; i < 24; i++) {

	dadoAtual = diaAtual.dadosHoras[i];
	var frequenciaCardiaca = parseFloat(dadoAtual.frequenciaCardiaca);
	var frequenciaRespiratoria = parseFloat(dadoAtual.frequenciaRespiratoria);
	var temperaturaCorporea = parseFloat(dadoAtual.temperaturaCorporea);
	var saturacaoOxigenio = parseFloat(dadoAtual.saturacaoOxigenio);
	var pressaoSistolica = parseFloat(dadoAtual.pressaoSistolica);
	var pressaoDiastolica = parseFloat(dadoAtual.pressaoDiastolica);
	var calcPam = (pressaoSistolica - pressaoDiastolica)/3 + pressaoDiastolica;
	var pressaoMedia = calcPam.toFixed(1);

	
	

	var linha = '';
	var cont = 0;

	if(frequenciaCardiaca < 60 || frequenciaCardiaca > 100){
		linha += '<td style="color: red">'+frequenciaCardiaca+'</td>';
		cont++;
	}else{
		linha += '<td>'+frequenciaCardiaca+'</td>'
	}

	if(frequenciaRespiratoria < 12 || frequenciaRespiratoria > 20){
		linha += '<td style="color: red">'+frequenciaRespiratoria+'</td>';
		cont++;
	}else{
		linha += '<td>'+frequenciaRespiratoria+'</td>'
	}

	if(temperaturaCorporea < 30 || temperaturaCorporea > 37){
		linha += '<td style="color: red">'+temperaturaCorporea+'</td>';
		cont++;
	}else{
		linha += '<td>'+temperaturaCorporea+'</td>'
	}

	if(saturacaoOxigenio < 95){
		linha += '<td style="color: red">'+saturacaoOxigenio+'</td>';
		cont++;
	}else{
		linha += '<td>'+saturacaoOxigenio+'</td>'
	}

	if(pressaoSistolica < 90 || pressaoSistolica > 139){
		linha += '<td style="color: red">'+pressaoSistolica+'</td>';
		cont++;
	}else{
		linha += '<td>'+pressaoSistolica+'</td>'
	}

	if(pressaoDiastolica > 89){
		linha += '<td style="color: red">'+pressaoDiastolica+'</td>';
		cont++;
	}else{
		linha += '<td>'+pressaoDiastolica+'</td>'
	}

	if(cont > 0){
		linha = '<tr class="linha"><th style="color: red">'+dadoAtual.hora+'</th>'+linha+'<td>'+pressaoMedia+'</td></tr>';
	}else{
		linha = '<tr class="linha"><th>'+dadoAtual.hora+'</th>'+linha+'<td>'+pressaoMedia+'</td></tr>';
	}

		$("table#table-column-toggle tbody").append(linha).closest("table#table-column-toggle").table("refresh").trigger("create");
	}
	$(".ui-table-columntoggle-btn").detach().appendTo('#bloco2');

});


$(document).on('pageinit', '#monitor', function() {

var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var datas = {};

for(var i = 0; i<arrayDiasMonitorados.length; i++){
	var valor = 'data'+(i+1);
	datas[valor] = arrayDiasMonitorados[i].data;
}



$.each(datas, function(val, text) {
    $('.comboboxData').append(new Option(text,val));

    });


	$('.comboboxData').selectmenu().selectmenu('refresh');

});


$(document).on('change', 'select', function() {

var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var dataEscolhida = $('#dataTabela option:selected').text();

var matriz = [];
matriz.push([1, 2, 3, 4, 5]);
matriz.push([6, 7, 8, 9, 10]);
matriz.push([11, 12, 13, 14, 15]);
matriz.push([16, 17, 18, 19, 20]);


console.log(matriz[0][0]);

$('#table-column-toggle').table('refresh');


});



