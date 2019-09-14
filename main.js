//Ignore the web poprtion, work on the actual encrypthing and decrpyting
//const form = document.querySelector('form');
//
//form.onsubmit = (_) => {
//  const data = new FormData(form);
//  console.log(data);
//};
function encrypt(value, offset) {
    // String to encrpyt, number of offset
    console.log(value, offset);
    value = value.toLowerCase();
    // Empty string to add chars after encrpytion. @TODO Add logic for spaces 
    var encrypted_text = "";
    for (var x = 0, c = ""; c = value.charAt(x); x++) {
        if (c.charCodeAt(0) == 127 || c.charCodeAt(0) == 32) {
            encrypted_text += " ";
        }
        else {
            encrypted_text += String.fromCharCode(c.charCodeAt(0) + offset);
        }
    }
    console.log(encrypted_text);
}
;
function decrypt(value, offset) {
    // String to encrpyt, number of offset
    console.log(value, offset);
    value = value.toLowerCase();
    // Empty string to add chars after encrpytion. @TODO Add logic for spaces 
    var encrypted_text = "";
    for (var x = 0, c = ""; c = value.charAt(x); x++) {
        //var temp_char = c.charCodeAt(0) + offset;
        encrypted_text += String.fromCharCode(c.charCodeAt(0) + offset);
    }
    console.log(encrypted_text);
}
;
encrypt("Courage the cowardly dog", 1);
