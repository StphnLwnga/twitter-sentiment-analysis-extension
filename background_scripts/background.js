let tweetSentiment = {};

// NOTE FOR CHROME: please swap "browser" for "chrome"
chrome.runtime.onMessage.addListener(function (message) {
    // Listen for the "sentiment" message, if seen update the `tweetSentiment` object to the data received
    if (message.type === "sentiment") tweetSentiment = message.data;
});

let sentimentValues = [];

function countSentiments(obj) {
    let values = Object.values(obj);

    // Use the reduce method to count the number of occurrences of each value
    let counts = values.reduce(
        (acc, val) => {
            acc[val == -1 ? String(val) : val]++;
            return acc;
        },
        { "-1": 0, 0: 0, 1: 0 }
    );

    return Object.values(counts);
}

// NOTE: instead of "browser" please use "chrome" if you are planning to run the extension on the chrome browser
chrome.runtime.onMessage.addListener(function (message) {
    if (message.type === "sentiment")
        tweetSentiment = message.data; // Set the object to the data received

    // Get the counts of each sentiment value and send it to the other scripts
    sentimentValues = countSentiments(tweetSentiment);
    chrome.runtime.sendMessage({
        type: "sentimentValues",
        data: sentimentValues,
    });
});