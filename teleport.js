// Safari uses `safari`; Opera, Microsoft Edge, and Google Chrome use `chrome`; and Firefox uses `browser`
var browser = chrome || browser || safari

browser.browserAction.onClicked.addListener(function(tab) {
  // The Wayback Machine doesn't archive non-http urls or blank urls
  if (tab.url !== "" && tab.url.startsWith("http")) {
    browser.tabs.create({url: `https://web.archive.org/web/*/${tab.url}`})
  }
})
