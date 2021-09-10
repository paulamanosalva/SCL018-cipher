const cipher = {
  encode: function(offset, textEncode) {
  try{
    if (offset === null || offset === 0 ) {
      throw new TypeError();
    }
  }
  catch (TypeError){
    throw new TypeError();
  }
    
  
    let cipherText = "";
    for(let i=0 ; i < textEncode.length; i++){
      let asciiNum = textEncode[i].charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 90 ){
        cipherText += String.fromCharCode((asciiNum - 65 + offset)%26 + 65);
      }
      else if (asciiNum >= 97 && asciiNum <= 122){
        cipherText += String.fromCharCode((asciiNum - 97 + offset)%26 + 97);
      }  
      else{
        cipherText += String.fromCharCode(asciiNum);
      }
  }
  return cipherText;
},
  decode: function(offset, textDecode){
    try{
      if (offset === null || offset === 0 ) {
        throw new TypeError();
      }
    }
    catch (TypeError){
      throw new TypeError();
    }
      
    let n = 1;
    let decipherText = "";
    for(let i=0 ; i < textDecode.length; i++){
      let asciiNum = textDecode[i].charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 90 ){
        if(asciiNum - (offset %26) >=65){
          decipherText += String.fromCharCode(asciiNum - (offset % 26));
        }
        else if(offset>26){
          while(26*n - offset < 0){
            n= n+1;
          }
          decipherText += String.fromCharCode(asciiNum + Math.abs((n*26 - offset))%26); 
      }
        else{
           decipherText += String.fromCharCode(asciiNum + Math.abs((26 - offset))%26);
        }
      }
      else if (asciiNum >= 97 && asciiNum <= 122){
        if(asciiNum - (offset %26) >=97){
          decipherText += String.fromCharCode(asciiNum - (offset % 26));
        }
      else if(offset>26){
        while(26*n - offset < 0){
          n= n+1;
        }
          decipherText += String.fromCharCode(asciiNum + Math.abs((n*26 - offset))%26); 
      }
        else{
           decipherText += String.fromCharCode(asciiNum + Math.abs((26 - offset))%26);
        }
      }  
      else{
        decipherText += String.fromCharCode(asciiNum);
      }
    }
    return decipherText;
  }
}
export default cipher;
