//OBJETO GLOBAL WINDOW
window.cipher = {
  ///METODO CIFRAR: Declarando función para cifrar una cadena de texto
  encode: (offset, string) => {
    let key = parseInt(offset);//parsear el offset y obtener un valor numérico 
    let space = ''; // almacenar caracteres especiales
    let myResult = '';  //almacenar el resultado cifrado
    key = offset % 26;
    // offset = psarseInt(offset) % 26; // sacar el residuo para números grandes (solo correrá la cantidad del residuo)

    //creando bucle para almacenar las letras cifradas
    for (let i = 0; i < string.length; i++) {  // recorrer el string del usuario
      let asciiCharacter = string.charCodeAt(i);
      if (asciiCharacter >= 65 && asciiCharacter <= 90) { //preguntar si es una letra mayúscula en el código ASCII
        space = (asciiCharacter - 65 + key) % 26 + 65;
      } else if (asciiCharacter >= 97 && asciiCharacter <= 122) { //preguntar si es una letra minúscula en el código ASCII 
        space = (asciiCharacter - 97 + key) % 26 + 97;
      } else {
        space = asciiCharacter; //si no es mayuscula, ni minúscula, imprimir el mismo caracter ingresado.
      } myResult += String.fromCharCode(space); //almacenar el resultado del cifrado y convertirlo en string
    }
    return myResult; // retornar el resultado cifrado 
  },

  ///METODO DESCIFRAR: Declarando función para descifrar una cadena de texto
  decode: (offset, string) => {
    let key = parseInt(offset); //parsear el offset y obtener un valor numérico 
    let space = ''; // almacenar caracteres especiales
    let myResult = ''; //almacenar el resultado descifrado
    key = offset % 26; // sacar el residuo para números grandes (solo correrá la cantidad del residuo)
    //creando bucle para almacenar las letras descifradas
    for (let i = 0; i < string.length; i++) {  // recorrer el string del usuario
      let asciiCharacter = string.charCodeAt(i);
      if (asciiCharacter >= 65 && asciiCharacter <= 90) { //preguntar si es una letra mayúscula en el código ASCII
        space = (asciiCharacter - 65 - key + 26 * 2) % 26 + 65;
      } else if (asciiCharacter >= 97 && asciiCharacter <= 122) { //preguntar si es una letra minúscula en el código ASCII 
        space = (asciiCharacter - 97 - key + 26 * 2) % 26 + 97;
      } else {
        space = asciiCharacter; //si no es mayuscula, ni minúscula, imprimir el mismo caracter ingresado.
      } myResult += String.fromCharCode(space); ////almacenar el resultado del descifrado y convertirlo en string
    }
    return myResult; // retornar el resultado descifrado
  }
  //createCipherWithOffset: () => {}
};
