function encrypt(value: string, offset: number){
  // String to encrpyt, number of offset
  console.log(value, offset)
  value = value.toLowerCase()
  // Empty string to add chars after encrpytion. 
  let encrypted_text: string = ""

  for (var x = 0, c = ""; c = value.charAt(x); x++){
    if (c.charCodeAt(0) == 127 || c.charCodeAt(0) == 32){
      encrypted_text += " "
    }else {
      encrypted_text += String.fromCharCode(c.charCodeAt(0) + offset);
    }
  }
  console.log(encrypted_text)
};

function decrypt(value: string, offset: number){
  // String to encrpyt, number of offset
  console.log(value, offset)
  value = value.toLowerCase()
  // Empty string to add chars after encrpytion. @TODO Add logic for spaces 
  let encrypted_text: string = ""

  for (var x = 0, c = ""; c = value.charAt(x); x++){
    //var temp_char = c.charCodeAt(0) + offset;
    encrypted_text += String.fromCharCode(c.charCodeAt(0) + offset);
  }
  console.log(encrypted_text)
};


encrypt("Courage the cowardly dog", 1)
