//VARIAVEIS GLOBAIS
numIdPacAtual = 0;
pacientesJson = [];

//CARREGAMENTO DE DADOS INICIAL
$(document).on('pageinit', '#init', function() {
	
	$.getJSON('https://intense-sled-740.appspot.com/_ah/api/jsonmsvh/v1/pacientes', function(data) {
		pacientesJson = data.items;
		setTimeout(function() {
			$.mobile.changePage("#pacientes", "fade");
	}, 2000);		
	});	
});



//RECEBENDO MAIS DADOS DO SERVIDOR

$(function() {
    setInterval(function(){
	var ultimoDado = ultimoDado();
	var data = ultimoDado.data.value;
	var hora = ultimoDado.hora.value;
	console.log(ultimoDado);

		$.getJSON("https://intense-sled-740.appspot.com/_ah/api/jsonmsvh/v1/dadosdia?data="+data+"&hora="+hora+"", function(data) {
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


//CONFIGURACAO DO APLICATIVO

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


//LISTA DE PACIENTES

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


//BOTAO DE ALARME DOS PACIENTES
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

//DIA E HORA DO ULTIMO DADO


function ultimoDado() {
var diasMonitorados = diasMonitoradosPaciente();
var diaAtual = dadosDiaAtual(diasMonitorados);
var quantHoras = diaAtual.length;
var ultimoDado = {data:""+diaAtual.data+"", hora:""+diaAtual.dadosHoras[quantHoras - 1]+""};

return ultimoDado;
}


//DADOS DO PACIENTE CLICADO

function dadosDiaPacienteAtual(dataEscolhida) {

var diasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;
var dados = [];
for(var i=0; i< diasMonitorados.length; i++){
	if(diasMonitorados[i].data == dataEscolhida){
		dados = diasMonitorados[i].dadosHoras;
		break;
	}
}

return dados;
}

//TODOS OS DIAS MONITORADOS DO PACIENTE

function diasMonitoradosPaciente() {

var diasMonitorados = pacientesJson[numIdPacAtual].diasMonitorados;

return diasMonitorados;
}

//DIA ATUAL MONITORADO DO PACIENTE

function dadosDiaAtual(diasMonitorados) {

	var posDiaAtual = diasMonitorados.length -1;
	var dadosDiaAtual = diasMonitorados[posDiaAtual];

return dadosDiaAtual;
}

//INFORMAÇOES DO PACIENTE

function infoPaciente() {

	var paciente = pacientesJson[numIdPacAtual];

return paciente;
}

// ATUALIZAR MONITOR

function atualizaMonitor(diasMonitorados) {
		
		var paciente = infoPaciente();
		var nome = paciente.nome;
		var idade = paciente.idade;
		var numProntuario = paciente.prontuario;
		var uti = paciente.uti;
		var leito = paciente.leito;
		var descricao = paciente.descricao;

		var diaMaisRecente = dadosDiaAtual(diasMonitorados);
		var data = diaMaisRecente.data;
		var horas = diaMaisRecente.dadosHoras;
		var horaMaisRecente = diaMaisRecente.dadosHoras[horas.length-1].hora;

		var tc = parseFloat(diaMaisRecente.dadosHoras[horas.length-1].temperaturaCorporea);
		var pas = parseFloat(diaMaisRecente.dadosHoras[horas.length-1].pressaoSistolica);
		var pad = parseFloat(diaMaisRecente.dadosHoras[horas.length-1].pressaoDiastolica);
		var pam = parseFloat(diaMaisRecente.dadosHoras[horas.length-1].pressaoMedia);
		var sato2 = parseFloat(diaMaisRecente.dadosHoras[horas.length-1].saturacaoOxigenio);
		var fc = parseFloat(diaMaisRecente.dadosHoras[horas.length-1].frequenciaCardiaca);
		var fr = parseFloat(diaMaisRecente.dadosHoras[horas.length-1].frequenciaRespiratoria);

		$("#nomeMonitor").html('<img  src="js/jquerymobile-files/images/icons-png/user-white.png"/> '+nome+'');
		$("#utiMonitor").html('<img src="js/jquerymobile-files/images/icons-png/location-white.png"/> '+uti+'');
		$("#idadeMonitor").html('<img src="js/jquerymobile-files/images/icons-png/star-white.png"/> '+idade+'');
		$("#leitoMonitor").html('<img src="js/jquerymobile-files/images/icons-png/plus-white.png"/> Leito '+leito+'');
		$("#prontuarioMonitor").html('<img src="js/jquerymobile-files/images/icons-png/tag-white.png"/> N.P. '+numProntuario+'');
		$("#descricaoMonitor").html('<img src="js/jquerymobile-files/images/icons-png/edit-white.png"/> '+descricao+'');
		$("#dataHoraDados").html('<h1 align="center"><big>Ultima atualização: '+data+' - '+horaMaisRecente+'h</big></h1>');


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
		
}

//MONITOR DO PACIENTE CLICLADO


$(function() {
	$('#listap').on('click', '.paciente', function(event) {
		
		var id = $(this).attr("id");
		numIdPacAtual = parseInt(id.substring(3, id.length));
		var diasMonitorados = diasMonitoradosPaciente();
		atualizaMonitor(diasMonitorados);

	});
});

// MONITOR DO PACIENTE

$(document).on('pageshow', '#monitor', function() {

		var diasMonitorados = diasMonitoradosPaciente();
		atualizaMonitor(diasMonitorados);

});

//ICONES DO MONITOR

//1

$(function() {
	$('#monitorFC').on('click', 'a', function() {
		var botaoFC = document.getElementById("btFreqCar");
		botaoFC.classList.add("ui-btn-active");
		botaoFC.classList.add("ui-state-persist");
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

//2

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

//3

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

//4

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

//5

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


// TABELA DE DADOS 

$(document).on('pageshow', '#tabela', function() {
	$(".ui-table-columntoggle-btn").detach().appendTo('#bloco2');
	
	var diasMonitorados = diasMonitoradosPaciente();
	atualizaComBoxTabela(diasMonitorados);
	
	var diaAtual = dadosDiaAtual(diasMonitorados);
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

// ATUALIZA TABELA

function atualizaTabela(dados){

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

//DATA DA TABELA

$(document).on('change', '#dataTabela', function() {

var dataEscolhida = $('#dataTabela option:selected').text();

var dadosDiaEncontrado = dadosDiaPacienteAtual(dataEscolhida);

var dados = [];

for ( i = 0; i < dadosDiaEncontrado.length; i++) {	
	var hora = dadosDiaEncontrado[i].hora;
	var frequenciaCardiaca = parseFloat(dadosDiaEncontrado[i].frequenciaCardiaca);
	var frequenciaRespiratoria = parseFloat(dadosDiaEncontrado[i].frequenciaRespiratoria);
	var temperaturaCorporea = parseFloat(dadosDiaEncontrado[i].temperaturaCorporea);
	var saturacaoOxigenio = parseFloat(dadosDiaEncontrado[i].saturacaoOxigenio);
	var pressaoSistolica = parseFloat(dadosDiaEncontrado[i].pressaoSistolica);
	var pressaoDiastolica = parseFloat(dadosDiaEncontrado[i].pressaoDiastolica);
	var pressaoMedia = parseFloat(dadosDiaEncontrado[i].pressaoMedia);
	
	dados.push([hora, frequenciaCardiaca, frequenciaRespiratoria, temperaturaCorporea, saturacaoOxigenio, pressaoSistolica, pressaoDiastolica, pressaoMedia]);
	}
atualizaTabela(dados);

});

// POPUP DA TABELA

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


// BOTOES DO MENU DOS GRAFICOS

$(function() {
//frequencia Cardiaca
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
//Frequencia Respiratoria
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
//Temperatura Corporea
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
//Saturacao de Oxigenio
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
// Pressao Arterial	
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
//Padrao
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




//GRAFICOS
function graficoPressaoArterial(arrayDadosHora) {
	var chart;
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

}

function graficoSaturacaoOxigenio(arrayDadosHora) {
	var chart;
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

}

function graficoFrequenciaCardiaca(arrayDadosHora) {
	var chart;
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
}

function graficoTemperaturaCorporea(arrayDadosHora) {
	var chart;
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
}

function graficoFrequenciaRespiratoria(arrayDadosHora) {
	var chart;
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
}


//GRAFICO INICIAL

$(document).on('pageshow', '#graficos', function() {
	var diasMonitorados = diasMonitoradosPaciente();
	atualizaComBoxGrafico(diasMonitorados);
	var diaAtual = dadosDiaAtual(diasMonitorados);
	
	graficoPressaoArterial(diaAtual.dadosHoras);
	graficoSaturacaoOxigenio(diaAtual.dadosHoras);
	graficoFrequenciaCardiaca(diaAtual.dadosHoras);
	graficoTemperaturaCorporea(diaAtual.dadosHoras);
	graficoFrequenciaRespiratoria(diaAtual.dadosHoras);

});


// TROCA DATA DO GRAFICO

$(document).on('change', '#dataGrafico', function() {

var dataEscolhida = $('#dataGrafico option:selected').text();
var dadosDiaEncontrado = dadosDiaPacienteAtual(dataEscolhida);

var dadosFC = [];
var dadosFR = [];
var dadosTC = [];
var dadosSAT = [];
var dadosPS = [];
var dadosPD = [];
var dadosPM = [];
var arrayHoras = [];

for ( i = 0; i < dadosDiaEncontrado.length; i++) {

	var hora = dadosDiaEncontrado[i].hora;
	dadosFC.push([i, parseFloat(dadosDiaEncontrado[i].frequenciaCardiaca)]);
	dadosFR.push([i, parseFloat(dadosDiaEncontrado[i].frequenciaRespiratoria)]);
	dadosTC.push([i, parseFloat(dadosDiaEncontrado[i].temperaturaCorporea)]);
	dadosSAT.push([i, parseFloat(dadosDiaEncontrado[i].saturacaoOxigenio)]);
	dadosPS.push([i, parseFloat(dadosDiaEncontrado[i].pressaoSistolica)]);
	dadosPD.push([i, parseFloat(dadosDiaEncontrado[i].pressaoDiastolica)]);
	dadosPM.push([i, parseFloat(dadosDiaEncontrado[i].pressaoMedia)]);
	arrayHoras.push([hora]);		
	}
	
var chartFrequenciaCardiaca = $('#frequenciaCardiaca').highcharts();
var chartFrequenciaRespiratoria = $('#frequenciaRespiratoria').highcharts();
var chartTemperaturaCorporea = $('#temperaturaCorporea').highcharts();
var chartSaturacaoOxigenio = $('#saturacaoOxigenio').highcharts();
var chartPressao = $('#pressao').highcharts();

chartFrequenciaCardiaca.series[0].setData(dadosFC);
chartFrequenciaCardiaca.xAxis[0].setCategories(arrayHoras);
chartFrequenciaRespiratoria.series[0].setData(dadosFR);
chartFrequenciaRespiratoria.xAxis[0].setCategories(arrayHoras);
chartTemperaturaCorporea.series[0].setData(dadosTC);
chartTemperaturaCorporea.xAxis[0].setCategories(arrayHoras);
chartSaturacaoOxigenio.series[0].setData(dadosSAT);
chartSaturacaoOxigenio.xAxis[0].setCategories(arrayHoras);
chartPressao.series[0].setData(dadosPS);
chartPressao.series[1].setData(dadosPD);
chartPressao.series[2].setData(dadosPM);
chartPressao.xAxis[0].setCategories(arrayHoras);

});

//ATUALIZA DATA DA TABELA
function atualizaComBoxTabela(arrayDiasMonitorados) {
$('#dataTabela').empty();
var datas = {};
for(var i = arrayDiasMonitorados.length-1; i>=0; i--){
	var valor = 'data'+(i-1);
	datas[valor] = arrayDiasMonitorados[i].data;
}
$.each(datas, function(val, text) {
    $('#dataTabela').append(new Option(text,val));

    });
$('#dataTabela').selectmenu().selectmenu('refresh');
}


//ATUALIZA DATA DO GRAFICO

function atualizaComBoxGrafico(arrayDiasMonitorados) {
$('#dataGrafico').empty();
var datas = {};
for(var i = arrayDiasMonitorados.length-1; i>=0; i--){
	var valor = 'data'+(i-1);
	datas[valor] = arrayDiasMonitorados[i].data;
}
$.each(datas, function(val, text) {
    $('#dataGrafico').append(new Option(text,val));

    });
$('#dataGrafico').selectmenu().selectmenu('refresh');
}

