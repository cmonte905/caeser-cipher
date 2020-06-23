export = {
  encrypt: function(inputed_value: string, offset: number, method: boolean){
    // Method is to determine whether to encrypt(true) or decrypt(false) 
    // String to encrpyt, number of offset
    // [(x + k) % 26] = encrypt 
    // [(x - k) % 26] = decrypt 
    let alphabet_dict = {
      'a': 0, 0: 'a',
      'b': 1, 1: 'b',
      'c': 2, 2: 'c',
      'd': 3, 3: 'd',
      'e': 4, 4: 'e',
      'f': 5, 5: 'f',
      'g': 6, 6: 'g',
      'h': 7, 7: 'h',
      'i': 8, 8: 'i', 
      'j': 9, 9: 'j',
      'k': 10, 10: 'k',
      'l': 11, 11: 'l',
      'm': 12, 12: 'm',
      'n': 13, 13: 'n', 
      'o': 14, 14: 'o',
      'p': 15, 15: 'p',
      'q': 16, 16: 'q',
      'r': 17, 17: 'r',
      's': 18, 18: 's',
      't': 19, 19: 't',
      'u': 20, 20: 'u',
      'v': 21, 21: 'v',
      'w': 22, 22: 'w',
      'x': 23, 23: 'x',
      'y': 24, 24: 'y',
      'z': 25, 25: 'z'
    }
    
    //Do not support over 26
    if (offset >= 26 ){
      return;
    }
    inputed_value = inputed_value.toLowerCase()
    let encrypted_text: string = ""
    for (var x = 0, c = ""; c = inputed_value.charAt(x); x++){
      // let char_offested: number = c.charCodeAt(0) +` offset
      if (c == " ") {
        // console.log("this is a space")
        encrypted_text += " "
      }else {
        let char_offested: number;
        if (method){
          char_offested = ((alphabet_dict[c] + offset) % 26)
        }
        else {
          char_offested = ((alphabet_dict[c] - offset) % 26)
          if (char_offested < 0) {
            char_offested += 26
          }
        }
        
        // console.log(char_offested)
        encrypted_text += alphabet_dict[char_offested]
      }
    }
    console.log(encrypted_text)
    return encrypted_text
  },
  
}
