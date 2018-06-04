
document.getElementById('botoncifrarprincipal').addEventListener('click', function(){

	let box= document.getElementById('box');
	let box1= document.getElementById('box1');

	//if(box1.style.display=='none'){
 	  box1.style.display='block';
 	  box.style.display='none';
 	//}else{
 	//  box1.style.display= 'none';
   // }
});

document.getElementById('limpiar').addEventListener('click', function(){

  document.getElementById('valoroffset').value='';
  document.getElementById('textoacifrar').value='';
  document.getElementById('textocifrado').value='';    
});
 
document.getElementById('regresar').addEventListener('click', function(){
     
  location.reload();
});

document.getElementById('botondescifrarprincipal').addEventListener('click', function(){
  
  let box= document.getElementById('box');
  let box2= document.getElementById('box2');

    //if(box2.style.display=='none'){
 	  box2.style.display='block';
 	  box.style.display='none';
 //	}else{
 	 // box2.style.display= 'none';
   //  } 

});

document.getElementById('limpiar2').addEventListener('click', function(){ 

  document.getElementById('valoroffset2').value='';
  document.getElementById('textoadescifrar').value='';
  document.getElementById('textodescifrado').value='';    
});
   
document.getElementById('regresar2').addEventListener('click', function(){
  
  location.reload();

});


document.getElementById('botoncifrar').addEventListener('click', function(){

  let valoroffset = document.getElementById('valoroffset').value; // se obtiene el valor del numero offset introducido
  let nrooffset = parseInt(valoroffset,10); // se parsea para convertir en entero
  let textoacifrar = document.getElementById('textoacifrar').value; 
  document.getElementById('textocifrado').innerHTML = cipher.encode(nrooffset,textoacifrar); 
});

document.getElementById('botondescifrar').addEventListener('click', function(){
  let valoroffset= document.getElementById('valoroffset2').value; // se obtiene el valor del numero offset introducido
  let nrooffset= parseInt(valoroffset,10); // se parsea para convertir en entero
  let textoadescifrar=document.getElementById('textoadescifrar').value; //se obtiene el valor del texto de decifrar
  document.getElementById('textodescifrado').innerHTML= cipher.decode(nrooffset,textoadescifrar); // se llama al metodo cipher.decode() para decifrar y arroja el texto decifrado
});