chrome.contextMenus.create({
  type: 'normal',
  id: 'cnpj',
  title: 'CNPJ',
  contexts: ['editable']
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'cnpjDefault',
  title: '00.000.000/0000-00',
  contexts: ['editable'],
  parentId: 'cnpj'
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'cnpjOnlyNumbers',
  title: '00000000000000 (somente números)',
  contexts: ['editable'],
  parentId: 'cnpj'
})
