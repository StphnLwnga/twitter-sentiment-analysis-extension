// This function performs sentiment analysis on a given string of text
function analyzeSentiment(text) {
    // For now, just randomly return a sentiment value (1, -1, or 0)
    const sentiments = [1, -1, 0];
    const sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];

    // Save this sentiment value to this text in an object called `tweetSentiment`
    tweetSentiment[text] = sentiment;

    // NOTE: instead of "browser" please use "chrome" if you are planning to run the extension on the chrome browser
    // Send the other scripts the object with all the calculated sentiments
    browser.runtime.sendMessage({
        type: "sentiment",
        data: tweetSentiment,
    });

    // return the calculated sentiment value to use somewhere else
    return sentiment;
}