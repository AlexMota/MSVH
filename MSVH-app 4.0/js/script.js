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

	var p = document.getElementById('listap');
	var filhos = p.childNodes;
	var i;

	for ( i = 1; i < 21; i++) {

		//botao icone
		var aIcon = document.createElement('a');
		aIcon.setAttribute('data-role', "icon");
		aIcon.setAttribute('data-icon', "alarm");
		aIcon.setAttribute('data-mini', "true");
		aIcon.setAttribute('data-inconpos', "notext");
		aIcon.setAttribute('data-inline', "true");
		aIcon.setAttribute('data-theme', "true");
		aIcon.setAttribute('class', "alarme");

		//BOTAO PACIENTE
		var li = document.createElement('li');
		var aPac = document.createElement('a');
		var img = document.createElement('img');
		var h3 = document.createElement('h3');
		var paragrafo = document.createElement('p');
		aPac.setAttribute('href', "#monitor");

		//gera um numero aleatorio que pode ser 1 ou 2
		var numAle = Math.floor((Math.random() * 6) + 1);

		if (numAle == 1) {
			img.setAttribute('src', "img/paciente-fem.png");
		} else {
			img.setAttribute('src', "img/paciente-mas.png");
		}

		switch (numAle) {
			case 1:
				img.setAttribute('src', "img/paciente-fem.png");
				break;
			case 2:
				img.setAttribute('src', "img/paciente-fem-ama.png");
				break;
			case 3:
				img.setAttribute('src', "img/paciente-fem-ver.png");
				break;
			case 4:
				img.setAttribute('src', "img/paciente-mas.png");
				break;
			case 5:
				img.setAttribute('src', "img/paciente-mas-ama.png");
				break;
			case  6:
				img.setAttribute('src', "img/paciente-mas-ver.png");
				break;
		}

		h3.innerHTML = 'Paciente ' + i;
		paragrafo.innerHTML = 'UTI XXX';

		//incopora os elementos
		li.appendChild(aPac);
		li.appendChild(aIcon);
		aPac.appendChild(img);
		aPac.appendChild(h3);
		aPac.appendChild(paragrafo);
		p.appendChild(li);
	}

	$("#listap").listview("refresh");

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
		$hrPopup.text(hr+'h')
		
		$popup.find('h3:eq(0)').text("Freq. Cardiaca: "+fc+" bpm");
		$popup.find('h3:eq(1)').text("Freq. Respiratoria: "+fr+" mpm");
		$popup.find('h3:eq(2)').text("Temp. Corporea: "+t+" ºC");
		$popup.find('h3:eq(3)').text("Sat. Oxigenio: "+so2+" %");
		$popup.find('h3:eq(4)').text("Press. Arterial: "+pa+"="+pam+" mmHg");


		$popup.popup("open");


		
	

});

});


$(document).on('pageinit', '#tabela', function() {

var hora;
	for ( i = 0; i < 24; i++) {
		
		hora = i + 7;
		
		if(hora >= 24){
			hora = hora - 24;
		}
		
		var linha = '<tr class="linha"><th>'+hora+'</th><td>45</td><td>38</td><td>39</td><td>74</td><td>24/24</td><td>24</td></tr>';
		
		$( "table#table-column-toggle tbody" )
		.append(linha)
		.closest( "table#table-column-toggle" )
		.table( "refresh" )
		.trigger( "create" );
	}

});

