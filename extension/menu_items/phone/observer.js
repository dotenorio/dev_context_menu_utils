function generate_phone (ddd, onlyNumbers) {
  var digits = 7
  var phone = ''
  if (ddd) {
    var max = 99
    var min = 11
    ddd = Math.floor(Math.random() * (max - min + 1)) + min
    phone += '(' + ddd + ') '
  }
  for (var i = 0; i <= digits; i++) {
    if (i === 4) phone += '-'
    phone += Utils.randomNumber(9)
  }
  if (onlyNumbers) {
    return phone.replace(/(\(|\)|-|\s)/gmi, '')
  }
  return phone
}

MenuItems.phoneDefault = function (clickedElement) {
  clickedElement.value = generate_phone(true, false)
  return clickedElement
}

MenuItems.phoneWithoutDDD = function (clickedElement) {
  clickedElement.value = generate_phone(false, false)
  return clickedElement
}

MenuItems.phoneOnlyNumbers = function (clickedElement) {
  clickedElement.value = generate_phone(true, true)
  return clickedElement
}

MenuItems.phoneWithoutDDDOnlyNumbers = function (clickedElement) {
  clickedElement.value = generate_phone(false, true)
  return clickedElement
}
