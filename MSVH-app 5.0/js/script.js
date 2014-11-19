//Variaveis globais
numIdPacAtual = 0;
pacientesJson = [];
//novosDados = [];

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
				max: 110,
				min: 90,
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
				max: 90,
				min: 60,
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
				max: 60,
				min: 20,
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
				max: 30,
				min: 5,
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
		var pam = parseFloat(pacientesJson[numIdPacAtual].diasMonitorados[dias.length-1].dadosHoras[horas.length-1].pressaoMedia);
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
	$(".ui-table-columntoggle-btn").detach().appendTo('#bloco2');
	var posDiaAtual = pacientesJson[numIdPacAtual].diasMonitorados.length -1;
	var diaAtual = pacientesJson[numIdPacAtual].diasMonitorados[posDiaAtual];
	var dadoAtual;
	var dadosPaciente = [];
	
	
	
	
	for ( i = 0; i < diaAtual.dadosHoras.length; i++) {

	dadoAtual = diaAtual.dadosHoras[i];
	
	var hora = dadoAtual.hora;
	var frequenciaCardiaca = parseFloat(dadoAtual.frequenciaCardiaca);
	var frequenciaRespiratoria = parseFloat(dadoAtual.frequenciaRespiratoria);
	var temperaturaCorporea = parseFloat(dadoAtual.temperaturaCorporea);
	var saturacaoOxigenio = parseFloat(dadoAtual.saturacaoOxigenio);
	var pressaoSistolica = parseFloat(dadoAtual.pressaoSistolica);
	var pressaoDiastolica = parseFloat(dadoAtual.pressaoDiastolica);
	var pressaoMedia = parseFloat(dadoAtual.pressaoMedia);
	
	dadosPaciente.push([hora, frequenciaCardiaca, frequenciaRespiratoria, temperaturaCorporea, saturacaoOxigenio, pressaoSistolica, pressaoDiastolica, pressaoMedia]);
	}


	atualizaTabela(dadosPaciente);
	
});

$(document).on('pageshow', '#monitor', function() {

$('#dataTabela').empty();
$('#dataGrafico').empty();

var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var datas = {};

for(var i = arrayDiasMonitorados.length-1; i>=0; i--){
	var valor = 'data'+(i-1);
	datas[valor] = arrayDiasMonitorados[i].data;
}



$.each(datas, function(val, text) {
    $('.comboboxData').append(new Option(text,val));

    });


	$('#dataTabela').selectmenu().selectmenu('refresh');
	$('#dataGrafico').selectmenu().selectmenu('refresh');

});


$(document).on('change', '#dataTabela', function() {

var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var dataEscolhida = $('#dataTabela option:selected').text();

var diasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var dadosDaEncontrado = '';
var dadosPaciente = [];
/*
var matriz = [];
matriz.push([1, 2, 3, 4, 5]);
matriz.push([6, 7, 8, 9, 10]);
matriz.push([11, 12, 13, 14, 15]);
matriz.push([16, 17, 18, 19, 20]);
*/


for(var i=0; i<diasMonitorados.length; i++){
	if(diasMonitorados[i].data == dataEscolhida){
		dadosDiaEncontrado = diasMonitorados[i].dadosHoras;
		break;
	}
}


for ( i = 0; i < dadosDiaEncontrado.length; i++) {

	
	var hora = dadosDiaEncontrado[i].hora;
	var frequenciaCardiaca = parseFloat(dadosDiaEncontrado[i].frequenciaCardiaca);
	var frequenciaRespiratoria = parseFloat(dadosDiaEncontrado[i].frequenciaRespiratoria);
	var temperaturaCorporea = parseFloat(dadosDiaEncontrado[i].temperaturaCorporea);
	var saturacaoOxigenio = parseFloat(dadosDiaEncontrado[i].saturacaoOxigenio);
	var pressaoSistolica = parseFloat(dadosDiaEncontrado[i].pressaoSistolica);
	var pressaoDiastolica = parseFloat(dadosDiaEncontrado[i].pressaoDiastolica);
	var pressaoMedia = parseFloat(dadosDiaEncontrado[i].pressaoMedia);
	
	dadosPaciente.push([hora, frequenciaCardiaca, frequenciaRespiratoria, temperaturaCorporea, saturacaoOxigenio, pressaoSistolica, pressaoDiastolica, pressaoMedia]);
	}




atualizaTabela(dadosPaciente);


});


function atualizaTabela(dados){

/*
  hr	fc	fr	tc	so2	pas	pad	pam

*/


$("#table-column-toggle tbody tr").remove();

for ( i = 0; i < dados.length; i++) {
  

	var hora = dados[i][0];
	var frequenciaCardiaca = parseFloat(dados[i][1]);
	var frequenciaRespiratoria = parseFloat(dados[i][2]);
	var temperaturaCorporea = parseFloat(dados[i][3]);
	var saturacaoOxigenio = parseFloat(dados[i][4]);
	var pressaoSistolica = parseFloat(dados[i][5]);
	var pressaoDiastolica = parseFloat(dados[i][6]);
	var pressaoMedia = parseFloat(dados[i][7]);

	
	

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
		linha = '<tr class="linha"><th style="color: red">'+hora+'</th>'+linha+'<td>'+pressaoMedia+'</td></tr>';
	}else{
		linha = '<tr class="linha"><th>'+hora+'</th>'+linha+'<td>'+pressaoMedia+'</td></tr>';
	}

		$("table#table-column-toggle tbody").append(linha).closest("table#table-column-toggle").table("refresh");
	}

}




$(document).on('change', '#dataGrafico', function() {

var arrayDiasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var dataEscolhida = $('#dataGrafico option:selected').text();

var diasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var dadosDaEncontrado = [];
var dadosPaciente = [];

var dadosFC = [];
var dadosFR = [];
var dadosTC = [];
var dadosSAT = [];
var dadosPS = [];
var dadosPD = [];
var dadosPM = [];





/*
var matriz = [];
matriz.push([1, 2, 3, 4, 5]);
matriz.push([6, 7, 8, 9, 10]);
matriz.push([11, 12, 13, 14, 15]);
matriz.push([16, 17, 18, 19, 20]);
*/


for(var i=0; i<diasMonitorados.length; i++){
	if(diasMonitorados[i].data == dataEscolhida){
		dadosDiaEncontrado = diasMonitorados[i].dadosHoras;
		break;
	}
}


for ( i = 0; i < dadosDiaEncontrado.length; i++) {

	
	var hora = dadosDiaEncontrado[i].hora;
	dadosFC.push([i, parseFloat(dadosDiaEncontrado[i].frequenciaCardiaca)]);
	dadosFR.push([i, parseFloat(dadosDiaEncontrado[i].frequenciaRespiratoria)]);
	dadosTC.push([i, parseFloat(dadosDiaEncontrado[i].temperaturaCorporea)]);
	dadosSAT.push([i, parseFloat(dadosDiaEncontrado[i].saturacaoOxigenio)]);
	dadosPS.push([i, parseFloat(dadosDiaEncontrado[i].pressaoSistolica)]);
	dadosPD.push([i, parseFloat(dadosDiaEncontrado[i].pressaoDiastolica)]);
	dadosPM.push([i, parseFloat(dadosDiaEncontrado[i].pressaoMedia)]);
		
	}

var chartFrequenciaCardiaca = $('#frequenciaCardiaca').highcharts();
var chartFrequenciaRespiratoria = $('#frequenciaRespiratoria').highcharts();
var chartTemperaturaCorporea = $('#temperaturaCorporea').highcharts();
var chartSaturacaoOxigenio = $('#saturacaoOxigenio').highcharts();
var chartPressao = $('#pressao').highcharts();

chartFrequenciaCardiaca.series[0].setData(dadosFC);
chartFrequenciaRespiratoria.series[0].setData(dadosFR);
chartTemperaturaCorporea.series[0].setData(dadosTC);
chartSaturacaoOxigenio.series[0].setData(dadosSAT);
chartPressao.series[0].setData(dadosPS);
chartPressao.series[1].setData(dadosPD);
chartPressao.series[2].setData(dadosPM);




});

$(function() {
    setInterval(function(){
		$.getJSON('https://intense-sled-740.appspot.com/_ah/api/jsonmsvh/v1/dadosdia?data=03%2F11%2F2014&hora=23', function(data) {
		    var novosDados = data.items;
		    var encontrado = false;
		    var tamDados = novosDados.length;
		    var dataPesq;
		    var indice;
		    var dias = [];
		    var tamDias
			var modeloDado = {};
		    
		    for ( var i = 0; i < tamDados; i++ ) {
			console.log("for1");
		    dias = pacientesJson[i].diasMonitorados;
		    dataPesq =  novosDados[i].data;
		    tamDias = dias.length;
				for ( var j = 0; j < tamDias; j++ ) {
			console.log("for2");	
					if(dias[j].data == dataPesq){
			  		  encontrado = true;
					  modeloDado.hora = novosDados[i].dadosHoras[0].hora;
					  modeloDado.temperaturaCorporea = novosDados[i].dadosHoras[0].temperaturaCorporea;
					  modeloDado.pressaoSistolica = novosDados[i].dadosHoras[0].pressaoSistolica;
					  modeloDado.pressaoDiastolica = novosDados[i].dadosHoras[0].pressaoDiastolica;
					  modeloDado.pressaoMedia = novosDados[i].dadosHoras[0].pressaoMedia;
					  modeloDado.saturacaoOxigenio = novosDados[i].dadosHoras[0].saturacaoOxigenio;
					  modeloDado.frequenciaCardiaca = novosDados[i].dadosHoras[0].frequenciaCardiaca;
					  modeloDado.frequenciaRespiratoria = novosDados[i].dadosHoras[0].frequenciaRespiratoria;

					  
					  console.log("encontrado");
					  pacientesJson[i].diasMonitorados[j].dadosHoras.push(modeloDado);
					  
					  break;
					}
				}
				if(encontrado == false){
				console.log("nao encontrado");
				pacientesJson[i].diasMonitorados.push(novosDados[i]);
				}
		    }


		    console.log("Dias: "+tamDias);
});
}, 10000);

});





