
function botoncifrar(){

	let valoroffset= document.getElementById('valoroffset').value; // se obtiene el valor del numero offset introducido

	let nrooffset= parseInt(valoroffset,10); // se parsea para convertir en entero

	let textoacifrar= document.getElementById('textoacifrar').value; //se obtiene el valor del texto de cifrar

	document.getElementById('textocifrado').innerHTML = cipher.encode(nrooffset,textoacifrar); // se llama al metodo cipher.encode() para cifrar y arroja el texto cifrado
}


 function botondecifrar(){

 	let valoroffset= document.getElementById('valoroffset').value; // se obtiene el valor del numero offset introducido

	let nrooffset= parseInt(valoroffset,10); // se parsea para convertir en entero

    let textoadecifrar=document.getElementById('textoadecifrar').value; //se obtiene el valor del texto de decifrar

 	document.getElementById('textodecifrado').innerHTML= cipher.decode(nrooffset,textoadecifrar); // se llama al metodo cipher.decode() para decifrar y arroja el texto decifrado
}