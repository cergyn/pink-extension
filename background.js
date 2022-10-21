chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked (tab) {
  console.log(JSON.stringify(tab))
}
