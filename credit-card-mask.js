/*
    Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
    However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

    Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/


// return masked string
function maskify(cc) {
    let mask = '',
        lastChar = cc.substr(-4);
    var i = 0;

    for (i; i < cc.length - 4; i++) {
        mask += '#';
    }
    return mask + lastChar;
}
