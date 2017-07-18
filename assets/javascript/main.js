$(document).ready(function() {
	var user1 = $(".user1");
	var user2 = $(".user2");
	var user3 = $(".user3");
	var user4 = $(".user4");
	var user5 = $(".user5");
	var user6 = $(".user6");
	var user7 = $(".user7");
	var user8 = $(".user8");
	var user9 = $(".user9");
	var arrUser = [user1,user2,user3,user4,user5,user6,user7,user8,user9];
	arrUser.forEach(function(id,a){
		id.click(function() {
			console.log(id,a)
			$(".cabecera-der").append("<h4>"+id+"</h4>");
		});
	});

	$(".user1").click(function() {
		var fotousuario = $(".img-user1");
		$(".foto-usuario").append(fotousuario);
	});



/* IMPRIMIR COMENTARIOS */
	$(".icono-2").click(function(event) {
		var nuevoComentario = $(".comentarios").val();
		var nuevaTarea = $(".nuevo-comentario").append("<div class='cajanuevocomentario'><li>"+nuevoComentario+"</li> </div> <br>");
			$(".comentarios").val(" ");
	});
	$("#comentario").keypress(function(e) {
		var key = e.which;
		//var microfono = $(".microfono");
		if (key == 13) {
			console.log("enter");
			var nuevoComentario = $(".comentarios").val();
			var nuevaTarea = $(".nuevo-comentario").append("<div class='cajanuevocomentario'><li>"+nuevoComentario+"</li> </div> <br>");
			$(".comentarios").val(" ");

		}
	
	});

})