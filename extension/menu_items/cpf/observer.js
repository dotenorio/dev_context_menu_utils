function generate_cpf (onlyNumbers) {
  var n = 9
  var n1 = Utils.randomNumber(n)
  var n2 = Utils.randomNumber(n)
  var n3 = Utils.randomNumber(n)
  var n4 = Utils.randomNumber(n)
  var n5 = Utils.randomNumber(n)
  var n6 = Utils.randomNumber(n)
  var n7 = Utils.randomNumber(n)
  var n8 = Utils.randomNumber(n)
  var n9 = Utils.randomNumber(n)
  var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10
  d1 = 11 - (Utils.mod(d1, 11))
  if (d1 >= 10) d1 = 0
  var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11
  d2 = 11 - (Utils.mod(d2, 11))
  if (d2 >= 10) d2 = 0
  if (onlyNumbers) {
    return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2
  }
  return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2
}

MenuItems.cpfDefault = function (clickedElement) {
  clickedElement.value = generate_cpf(false)
  return clickedElement
}

MenuItems.cpfOnlyNumbers = function (clickedElement) {
  clickedElement.value = generate_cpf(true)
  return clickedElement
}
