// eslint-disable-next-line no-undef
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked (tab) {
  console.log(JSON.stringify(tab))
}
