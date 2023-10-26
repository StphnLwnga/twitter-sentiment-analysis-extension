let tweetSentiment = {};

// NOTE FOR CHROME: please swap "browser" for "chrome"
browser.runtime.onMessage.addListener(function (message) {
  // Listen for the "sentiment" message, if seen update the `tweetSentiment` object to the data received
  if (message.type === "sentiment") tweetSentiment = message.data;
});