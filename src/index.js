
	document.getElementById('botoncifrar').addEventListener('click', function(){

     let valoroffset = document.getElementById('valoroffset').value; // se obtiene el valor del numero offset introducido

	let nrooffset = parseInt(valoroffset,10); // se parsea para convertir en entero

	let textoacifrar = document.getElementById('textoacifrar').value; 

	 document.getElementById('textocifrado').innerHTML = cipher.encode(nrooffset,textoacifrar); 
     });




	document.getElementById('botondescifrar').addEventListener('click', function(){
 	let valoroffset= document.getElementById('valoroffset').value; // se obtiene el valor del numero offset introducido

	let nrooffset= parseInt(valoroffset,10); // se parsea para convertir en entero

    let textoadescifrar=document.getElementById('textoadescifrar').value; //se obtiene el valor del texto de decifrar

 	document.getElementById('textodescifrado').innerHTML= cipher.decode(nrooffset,textoadescifrar); // se llama al metodo cipher.decode() para decifrar y arroja el texto decifrado
    });