chrome.contextMenus.create({
  type: 'normal',
  id: 'cpf',
  title: 'CPF',
  contexts: ['editable']
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'cpfDefault',
  title: '000.000.000-00',
  contexts: ['editable'],
  parentId: 'cpf'
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'cpfOnlyNumbers',
  title: '00000000000 (somente números)',
  contexts: ['editable'],
  parentId: 'cpf'
})
