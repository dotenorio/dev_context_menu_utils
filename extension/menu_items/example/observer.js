/* LEIA-ME
 * 1) Esta função será chamada quando o item for clicado.
 * 2) A função deve ter o mesmo nome do id menu criado.
 * 3) NÃO SE ESQUEÇA DE INCLUIR ESTE ARQUIVO NO 'manifest.json' NA SEÇÃO 'content_scripts'
 */

MenuItems.example = function (clickedElement) {
  clickedElement.value = 'Exemplo'
  return clickedElement
}
