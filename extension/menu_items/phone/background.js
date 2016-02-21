chrome.contextMenus.create({
  type: 'normal',
  id: 'phone',
  title: 'Telefone',
  contexts: ['editable']
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'phoneDefault',
  title: '(00) 0000 - 0000',
  contexts: ['editable'],
  parentId: 'phone'
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'phoneWithoutDDD',
  title: '0000 - 0000',
  contexts: ['editable'],
  parentId: 'phone'
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'phoneOnlyNumbers',
  title: '0000000000 (somente números)',
  contexts: ['editable'],
  parentId: 'phone'
})

chrome.contextMenus.create({
  type: 'normal',
  id: 'phoneWithoutDDDOnlyNumbers',
  title: '00000000 (sem ddd, somente números)',
  contexts: ['editable'],
  parentId: 'phone'
})
