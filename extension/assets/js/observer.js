chrome.runtime.sendMessage({})

var clickedElement = null

chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  clickedElement = document.activeElement
  MenuItems[request](clickedElement)
})
