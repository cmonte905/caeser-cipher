"use strict";
module.exports = {
    encrypt: function (inputed_value, offset) {
        // String to encrpyt, number of offset
        if (offset > 26) {
            return;
        }
        inputed_value = inputed_value.toLowerCase();
        var encrypted_text = "";
        for (var x = 0, c = ""; c = inputed_value.charAt(x); x++) {
            var char_offested = c.charCodeAt(0) + offset;
            if (c.charCodeAt(0) == 32) {
                encrypted_text += " ";
            }
            else if (char_offested > 122) {
                var offsetted_number = char_offested - 123;
                encrypted_text += String.fromCharCode(offsetted_number + 97);
            }
            else {
                encrypted_text += String.fromCharCode(char_offested);
            }
        }
        console.log(encrypted_text);
        return encrypted_text;
    },
    decrypt: function (inputed_value, offset) {
        // String to encrpyt, number of offset
        if (offset > 26) {
            // offset cannot be greater than 26
            return;
        }
        inputed_value = inputed_value.toLowerCase();
        var encrypted_text = "";
        for (var x = 0, c = ""; c = inputed_value.charAt(x); x++) {
            var char_offested = c.charCodeAt(0) - offset;
            if (c.charCodeAt(0) == 32) {
                encrypted_text += " ";
            }
            else if (char_offested < 97) {
                var offsetted_number = char_offested - 96;
                encrypted_text += String.fromCharCode(offsetted_number + 122);
            }
            else {
                encrypted_text += String.fromCharCode(char_offested);
            }
        }
        console.log(encrypted_text);
        return encrypted_text;
    }
};
