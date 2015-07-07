window.onload = function() {
  var editor = window.ace.edit('editor')

  editor.setTheme('ace/theme/twilight')
  editor.setKeyboardHandler(ace.require('ace/keyboard/vim').handler)
  editor.setOption('wrap', 80)
  editor.getSession().setMode('ace/mode/markdown')
  editor.getSession().setTabSize(2);
  editor.focus()
}
