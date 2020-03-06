export = {
  encrypt: function(inputed_value: string, offset: number){
    // String to encrpyt, number of offset
    let alphabet_dict = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8,
      'i': 9,
      'j': 10,
      'k': 11,
      'l': 12,
      'm': 13,
      'n': 14,
      'o': 15,
      'p': 16,
      'q': 17,
      'r': 18,
      's': 19,
      't': 20,
      'u': 21,
      'v': 22,
      'w': 23,
      'x': 24,
      'y': 25,
      'z': 26,
    }
    
    //Do not support over 26
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
    return encrypted_text
  },
  decrypt: function (inputed_value: string, offset: number){
    // String to encrpyt, number of offset
    if (offset > 26 ){
      // offset cannot be greater than 26
      return;
    }
    let alphabet_dict = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8,
      'i': 9,
      'j': 10,
      'k': 11,
      'l': 12,
      'm': 13,
      'n': 14,
      'o': 15,
      'p': 16,
      'q': 17,
      'r': 18,
      's': 19,
      't': 20,
      'u': 21,
      'v': 22,
      'w': 23,
      'x': 24,
      'y': 25,
      'z': 26,
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
    return encrypted_text
  }
}
