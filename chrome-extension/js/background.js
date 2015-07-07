chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('vim-editor.html')}, function(tab) {
  });
});
