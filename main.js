console.log('Hello world');
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
    for (var x = 0, c = ""; c = value.charAt(x); x++) {
        console.log(c);
    }
}
;
function decrypt(value) {
    console.log(value);
}
;
encrypt("Courage", 1);
