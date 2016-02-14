chrome.runtime.sendMessage({})

var clickedElement = null

document.addEventListener('mousedown', function (event) {
  if (event.button === 2) {
    clickedElement = event.target
  }
}, true)

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  MenuItems[request](clickedElement)
})
