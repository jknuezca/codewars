function validatePIN (pin) {
  var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
  return reg.test(pin);
}

//const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);
// return /^(\d{4}|\d{6})$/.test(pin);
