var Utils = {}

Utils.randomNumber = function (n) {
  var ranNum = Math.round(Math.random() * n)
  return ranNum
}

Utils.mod = function (dividendo, divisor) {
  return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor))
}
