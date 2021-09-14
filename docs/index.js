import cipher from './cipher.js';
//variables encode

//variables decode

//document.getElementById("cipher-output").innerText=cipherText;
//document.getElementById("decipher-output").innerText=decipherText;

document.addEventListener("click",(event)=>{
    if(event.target.matches('#cipher-encode-btn')){
        let textEncode = document.getElementById("cipher-input").value;
        let offset = parseInt(document.getElementById("cipher-offset").value);
        let result = cipher.encode(offset, textEncode);
        document.getElementById("cipher-output").innerText=result;
}
    else if(event.target.matches(".decipher-fn")){
        let textDecode = document.getElementById("decipher-input").value;
        let offset = parseInt(document.getElementById("decipher-offset").value);
        let result = cipher.decode(offset, textDecode);
        document.getElementById("decipher-output").innerText=result;
    }
    else {
      return 0;
    }
   });
