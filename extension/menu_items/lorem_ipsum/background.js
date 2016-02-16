chrome.contextMenus.create({
  type: 'normal',
  id: 'loremIpsum',
  title: 'Lorem Ipsum',
  contexts: ['editable']
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'loremIpsumOneWord',
  title: 'Uma palavra',
  contexts: ['editable'],
  parentId: 'loremIpsum'
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'loremIpsumOnePhrase',
  title: 'Uma frase',
  contexts: ['editable'],
  parentId: 'loremIpsum'
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'loremIpsumOneParagraph',
  title: 'Um parágrafo',
  contexts: ['editable'],
  parentId: 'loremIpsum'
})

