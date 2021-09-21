//function obtenerdatos(){
//    var gusto = document.getElementById('gusto').value;

//    document.registro.gustoobtenido.value = gusto;
//};

$(document).ready(function() {
    //obtenemos el valor de los input
    
    $('#adicionar').click(function() {
      var g = document.getElementById("gusto").value;
      var i = 1; //contador para asignar id al boton que borrara la fila
      var fila = '<tr id="row' + i + '"><td>'  + g + '</td><td>0' +  '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila
    
      i++;
    
      $('#mytable tr:first').after(fila);
        $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
        var nFilas = $("#mytable tr").length;
        //le resto 1 para no contar la fila del header
        document.getElementById("gusto").value = "";
        document.getElementById("gusto").focus();
      });
    $(document).on('click', '.btn_remove', function() {
      var button_id = $(this).attr("id");
        //cuando da click obtenemos el id del boton
        $('#row' + button_id + '').remove(); //borra la fila
        //limpia el para que vuelva a contar las filas de la tabla
        $("#adicionados").text("");
        var nFilas = $("#mytable tr").length;
      });
    });