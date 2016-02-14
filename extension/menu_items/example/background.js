/* LEIA-ME
 * 1) Veja a documentação em: https://developer.chrome.com/extensions/contextMenus
 * 2) NÃO SE ESQUEÇA DE INCLUIR ESTE ARQUIVO NO 'manifest.json' NA SEÇÃO 'background'
 */

chrome.contextMenus.create({
  type: 'normal',
  id: 'example',
  title: 'Exemplo',
  contexts: ['editable']
})
