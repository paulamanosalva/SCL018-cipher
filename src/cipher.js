const cipher = {
  encode: function() {
    let cipherText = "";
    let text = document.getElementById("cipher-input").value;
    let offset = parseInt(document.getElementById("cipher-offset").value);
    
    for(let i=0 ; i < text.length; i++){
      let asciiNum = text[i].charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 90 ){
        cipherText += String.fromCharCode((asciiNum - 65 + offset)%26 + 65);
        
      }
      else if (asciiNum >= 97 && asciiNum <= 122){
        cipherText += String.fromCharCode((asciiNum - 97 + offset)%26 + 97);
      }  
      else{
        cipherText += String.fromCharCode(asciiNum);
      }
    
    document.getElementById("cipher-output").innerText=cipherText;
    //return cipherText;
  }
  
},
  decode: function(){
    let n = 1;
    let decipherText = "";
    let text = document.getElementById("decipher-input").value;
    let offset = parseInt(document.getElementById("decipher-offset").value);
    for(let i=0 ; i < text.length; i++){
      let asciiNum = text[i].charCodeAt();
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
    document.getElementById("decipher-output").innerText=decipherText;
    //return decipherText;
  }
}

//export default cipher;
//let encodeBtn = document.getElementById("cipher-encode-btn");
//encodeBtn.addEventListener("click", cipher.encode());

//let decodeBtn = document.getElementsByClassName("decipher-fn")[0];
//decodeBtn.addEventListener("click", cipher.decode());

document.addEventListener("click",(event)=>{
  if(event.target.matches('#cipher-encode-btn')){
    cipher.encode();
  }
  else if(event.target.matches(".decipher-fn")){
    cipher.decode();
  }
  else {
    return 0;
  }
});