function encrypt(inputed_value: string, offset: number){
  // String to encrpyt, number of offset
  if (offset > 26 ){
    return;
  }
  inputed_value = inputed_value.toLowerCase()
  let encrypted_text: string = ""
  for (var x = 0, c = ""; c = inputed_value.charAt(x); x++){
    let char_offested: number = c.charCodeAt(0) + offset
    if (c.charCodeAt(0) == 32){
      encrypted_text += " "
    }
    else if (char_offested > 122) {
      let offsetted_number: number = char_offested - 123;
      encrypted_text += String.fromCharCode(offsetted_number + 97)
    }
    else {
      encrypted_text += String.fromCharCode(char_offested);
    }
  }
  console.log(encrypted_text)
};

function decrypt(inputed_value: string, offset: number){
  // String to encrpyt, number of offset
  if (offset > 26 ){
    // offset cannot be greater than 26
    return;
  }
  inputed_value = inputed_value.toLowerCase()
  let encrypted_text: string = ""
  for (var x = 0, c = ""; c = inputed_value.charAt(x); x++){
    let char_offested: number = c.charCodeAt(0) - offset
    if (c.charCodeAt(0) == 32){
      encrypted_text += " "
    }
    else if (char_offested < 97) {
      let offsetted_number: number = char_offested - 96;
      encrypted_text += String.fromCharCode(offsetted_number + 122)
    }
    else {
      encrypted_text += String.fromCharCode(char_offested);
    }
  }
  console.log(encrypted_text)
};

encrypt("Courage", 4)
decrypt("gsyveki", 4)
