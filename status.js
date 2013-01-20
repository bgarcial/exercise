
var passwd_account = "12345";
var name="Bernardo Garcia";
var balance=2500000;
var date = new Date();

function card(){
	var card = confirm("¿Deseas ingresar tu tarjeta?");
 	if(card == true){
      		var passwd_enter = prompt("Ingresa por favor tu contraseña. Recuerda que solo tienes 3 intentos  ");
        	if (passwd_enter==passwd_account){
          		window.location="bienvenido.html";
        	}else{
          		for (var count = 0; count<=2; count++) {
            		prompt("Ingresa de nuevo tu contraseña");
             				if (count == 2){
              				alert("Tu tarjeta ha sido bloqueada por seguridad")
                			window.location="banco.html";
             			}       
        		}
      		}
    	}else{
      		window.location="banco.html";
    	}
}

function myBalance(balance,retiro){
	//if(retiro == 0){
	//var balance=2500000;
	document.write("El saldo actual de tu cuenta es: " + balance + "<br /><br />");
	document.write("Fecha actual: " + date + "<br />");
	//}else{
	//	balance = balance - retiro;
	//}
}

