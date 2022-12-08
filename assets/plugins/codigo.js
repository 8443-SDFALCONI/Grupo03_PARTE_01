
$(document).ready(function(){
    $("#hide").on('click', function() {
        $("#elemento1").hide();
        return false;
    });
 
    $("#show").on('click', function() {
        $("#elemento1").show();
        return false;
    });
});


$(document).ready(function(){
    $(".hide-btn").click(function(){
        $(".e2").hide();
    });
    
    $(".show-btn").click(function(){
        $(".e3").show();
    });
	
	$(".reset-btn").click(function(){
		$(".e3").hide();
        $(".e2").show();
    });
});

$(document).ready(function(){
  $(".toggle-btn").click(function(){
    $(".e4").toggle();
  });
});


$(document).ready(function(){
    $("#mostrar").click(function(){
        $('.target').show(3000,function() {
        });
    });
    $("#ocultar").click(function(){
        $('.target').hide(3000,function() {
        });
    });
});


$(document).ready(function() {
    $("#opacidad05").click(function(event) {
        $("#rectangulo").fadeTo("slow",0.5);
    });
    $("#opacidad07").click(function(event) {
        $("#rectangulo").fadeTo("fast",0.7, function() {
            alert ('Efecto fadeTo terminado!');
            });
    });
    $("#alternar01").click(function(event) {
        $("#rectangulo").fadeToggle();
    });
    $("#alternar02").click(function(event) {
        $("#rectangulo").fadeToggle(4000);
    });
    $("#alternar03").click(function(event) {
        $("#rectangulo").fadeToggle("fast", function() {
            alert ('Efecto fadeToggle terminado!');
            });
    });
});


$(document).ready(function() {
    $("#mostrar5").click(function(event) {
        $("#rectangulo2").fadeIn();
    });
    $("#mostrar6").click(function(event) {
        $("#rectangulo2").fadeIn(4000);
    });
    $("#mostrar7").click(function(event) {
        $("#rectangulo2").fadeIn(4000, function() {
            alert ('Efecto fadeIn terminado!');
            });
    });
    $("#ocultar5").click(function(event) {
        $("#rectangulo2").fadeOut();
    });
    $("#ocultar6").click(function(event) {
        $("#rectangulo2").fadeOut(4000);
    });
    $("#ocultar7").click(function(event) {
        $("#rectangulo2").fadeOut(4000, function() {
            alert ('Efecto fadeOut terminado!');
            });
    });
});



$(document).ready(function() {
    $("#down01").click(function(event) {
        $("#rectangulo3").slideDown();
    });
    $("#down02").click(function(event) {
        $("#rectangulo3").slideDown(4000);
    });
    $("#down03").click(function(event) {
        $("#rectangulo3").slideDown("fast");
    });
    $("#down04").click(function(event) {
        $("#rectangulo").slideDown("fast", function() {
            alert ('Efecto slideDown con velocidad fast terminado!');
        });
    });

    $("#up01").click(function(event) {
        $("#rectangulo3").slideUp();
    });
    $("#up02").click(function(event) {
        $("#rectangulo3").slideUp(4000);
    });
    $("#up03").click(function(event) {
        $("#rectangulo3").slideUp("slow");
    });
    $("#up04").click(function(event) {
        $("#rectangulo3").slideUp("slow", function() {
            alert ('Efecto slideUp con velocidad slow terminado!');
        });
    });

    $("#toggle01").click(function(event) {
        $("#rectangulo3").slideToggle();
    });
    $("#toggle02").click(function(event) {
        $("#rectangulo3").slideToggle(4000);
    });
    $("#toggle03").click(function(event) {
        $("#rectangulo").slideToggle("slow", function() {
            alert ('Efecto slideToggle con velocidad slow terminado!');
        });
    });
});

$(document).ready(function(){
    $("#boton1").click(function(){
        $("#paraanimar").animate({padding:"0px"});
    });
    $("#boton2").click(function(){
        $("#paraanimar").animate({padding:"100px"});
    });
    $("#boton3").click(function(){
        $("#paraanimar").animate({paddingBottom:"150px"},3000);
    });
    $("#boton4").click(function(){
        $("#paraanimar").animate({paddingTop:"150px"},5000,function() {alert ('Efecto terminado!');});
    });
    $("#boton5").click(function(){
        $("#paraanimar").animate({paddingLeft:"150px", paddingRight:"150px"});
    });
});



$(document).ready(function()
    {
    $("#comenzarefectos").click(function(){
        $("#funciones").slideUp(6000);
        $("#funciones").slideDown(6000);
    });
 
    $("#paratodo").click(function(){
        $("#funciones").stop(true);
    });
 
    $("#finalizaefectoactual").click(function(){
        $("#funciones").stop(false,true);
    });
});


$(document).ready(function()
    {
    var MiColaDeFunciones = $("#funciones");
 
    $("#botoncomenzarcola").click(function(){
            MiColaDeFunciones.fadeOut(6000);
            MiColaDeFunciones.fadeIn(6000);
    });
 
    $("#botonstopcola").click(function(){
        MiColaDeFunciones.stop();
    });
});



$(document).ready(function() {
    $("#down05").click(function(event) {
        $("#rectangulo6").slideDown("fast", function() {
            alert ('Efecto slideDown con velocidad fast terminado!');
        });
    });
    $("#up05").click(function(event) {
        $("#rectangulo6").slideUp("slow", function() {
            alert ('Efecto slideUp con velocidad slow terminado!');
        });
    });
    $("#toggle05").click(function(event) {
        $("#rectangulo6").slideToggle("slow", function() {
            alert ('Efecto slideToggle con velocidad slow terminado!');
        });
    });
});


$(document).ready(function(){
    $("#parrafochain").hide(4000).show(4000).fadeOut(4000).fadeIn(4000).slideUp(4000).slideDown(4000);
});