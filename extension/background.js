chrome.browserAction.onClicked.addListener(function (tabs) {
  // Add the reader container to the DOM
  chrome.tabs.executeScript({
    file: "injectReader.js",
  });

  // Inject reader script
  chrome.tabs.executeScript({ file: "content.js" });
});
