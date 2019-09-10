console.log('Hello world');

//Ignore the web poprtion, work on the actual encrypthing and decrpyting
//const form = document.querySelector('form');
//
//form.onsubmit = (_) => {
//  const data = new FormData(form);
//  console.log(data);
//};

function encrypt(value: string, offset: number){
  // String to encrpyt, number of offset
  console.log(value, offset)
  value = value.toLowerCase()

  for (var x = 0, c = ""; c = value.charAt(x); x++){
    console.log(c)
    console.log(c.charCodeAt(0))
    var temp_char = c.charCodeAt(0) + offset;
    console.log(String.fromCharCode(temp_char) + '\n')
  }
};

function decrypt(value: string){
  console.log(value);
};


encrypt("Courage", 1)
