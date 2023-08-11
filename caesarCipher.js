function rot13(str) {
    let solvedStr = "";
    
    for(let i=0; i<str.length; i++) {
        let ascii = str[i].charCodeAt();
        if(ascii >= 65 && ascii <= 77) {
            solvedStr += String.fromCharCode(ascii + 13);
        } else if(ascii >= 78 && ascii <= 90) {
            solvedStr += String.fromCharCode(ascii - 13);
        } else {
            solvedStr += str[i]; 
        }
    }
    
  return solvedStr;
}

rot13("URYYB JBEYQ"); // OUTPUT: HELLO WORLD
