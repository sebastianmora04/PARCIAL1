$(document).ready(function() {
    //obtenemos el valor de los input
    
    $('#adicionar').click(function() {
      var g = document.getElementById("gusto").value;
      var i = 1; //contador para asignar id al boton que borrara la fila
      var fila = '<tr id="row' + i + '"><td id="gusto' + i + '">'  + g + '</td><td id="percent' + i + '" >0' +  '</td><td><span type="button" onclick="transformarEnEditable(this)" name="edit" id="' + i + '" class="">Edit</span></td></tr>'; //esto seria lo que contendria la fila
    
      i++;
    
      $('#mytable tr:first').after(fila);
        $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
        var nFilas = $("#mytable tr").length;
        //le resto 1 para no contar la fila del header
        document.getElementById("gusto").value = "";
        document.getElementById("gusto").focus();
      });
      
});

var editando=false;

function transformarEnEditable(nodo){

    if (editando == false) {
        var nodoTd = nodo.parentNode;
        var nodoTr = nodoTd.parentNode;
        var nodoContenedorForm = document.getElementById('contenedorForm');
        var nodosEnTr = nodoTr.getElementsByTagName('td');
        var gusto = nodosEnTr[0].textContent;
        var percent = nodosEnTr[1].textContent;
        var nuevoCodigoHtml = 
            '<td><input type="text" name="gusto" id="gusto" value="'+gusto+'" size="4" ></td>'+
            '<td><input type="text" name="percent" id="percent" value="'+percent+'" size="1" </td>'+
            '<td>En edición</td>';

        nodoTr.innerHTML = nuevoCodigoHtml;
        nodoContenedorForm.innerHTML ='<form name = "formulario" action="Resultado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
            '<input class="btn btn-outline-success" type = "submit" value="Aceptar"> <input class="btn btn-outline-danger" type="reset" value="Cancelar"></form>';
        editando = "true";
    }
    else {
    alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}
function capturarEnvio(){
    var nodoContenedorForm = document.getElementById('contenedorForm');
    nodoContenedorForm.innerHTML = '<form name = "formulario" action="Resultado.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
        '<input type="hidden" name="name" value="'+document.querySelector('#name').value+'">'+
        '<input type="hidden" name="inputemail" value="'+document.querySelector('#inputemail').value+'">'+
        '<input type="hidden" name="Telefono" value="'+document.querySelector('#Telefono').value+'">'+
        '<input type="hidden" name="gusto" value="'+document.querySelector('#gusto').value+'">'+
        '<input type="hidden" name="percent" value="'+document.querySelector('#percent').value+'">'+
        '<input class="btn btn-outline-success" type = "submit" value="Aceptar"> <input class="btn btn-outline-danger" type="reset" value="Cancelar"></form>';
    document.formulario.submit();
}

function anular(){
window.location.reload();
}

function carga() {
    var n = getQueryVariable('name');
    var em = getQueryVariable('inputemail');
    var t = getQueryVariable('Telefono');
    var g = getQueryVariable('gusto'); 
    var per = getQueryVariable('percent');

    document.getElementById('n').innerHTML = n;
    document.getElementById('em').innerHTML = em;
    document.getElementById('t').innerHTML = t;
    document.getElementById('g').innerHTML = g;
    document.getElementById('per').innerHTML = per;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
 }