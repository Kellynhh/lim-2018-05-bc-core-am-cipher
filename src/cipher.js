window.cipher = {
 
encode(offset, string) { 
	
 let resultado='';

 for (let i=0; i<string.length; i++){

   let numeroposicion = string.charCodeAt(i); // obtenemos el código ASCII
  
  if (65<= numeroposicion && numeroposicion <=  90)// Mayusculas

  resultado += String.fromCharCode((numeroposicion-65+ offset) % 26 +65); // Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado

  else if(97 <= numeroposicion && numeroposicion <= 122)  //Minusculas

  resultado += String.fromCharCode((numeroposicion-97+ offset) % 26 +97);// Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado

  else resultado += String.fromCharCode( numeroposicion);
}
return resultado;

},

decode(offset, string) { //debugger
	
 let resultado='';
 for (let i=0; i<string.length; i++){

   let numeroposicion = string.charCodeAt(i); // obtenemos el código ASCII

  if (65 <= numeroposicion && numeroposicion <=  90) // Mayusculas

  resultado += String.fromCharCode((numeroposicion+65-offset) % 26 + 65); // Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado
 
  else if(97 <= numeroposicion && numeroposicion <= 122)  //Minusculas
 
  resultado += String.fromCharCode((numeroposicion+97-offset-12) % 26 + 97);// Obtener el nuevo código ASCII mediante fórmula y concatenamos para formar el resultado
  
  else resultado += String.fromCharCode( numeroposicion);
   
 }
return resultado;

 },
 createCipherWithOffset(offset){

        var string='';
        return {
          encode: cipher.encode(offset,string),
          decode: cipher.decode(offset,string),
        };

 },

}; 
