let tweetSentiment = {};

// NOTE FOR CHROME: please swap "browser" for "chrome"
browser.runtime.onMessage.addListener(function (message) {
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
browser.runtime.onMessage.addListener(function (message) {
    console.log('Listener Active')
    if (message.type === "sentiment")
        tweetSentiment = message.data; // Set the object to the data received

    else if (message.type === "resetSentiment")
        tweetSentiment = {} // Reset sentiments

    // Count sentiment values & save to values array
    sentimentObj = countSentiments(tweetSentiment);
    sentimentValues = [
        sentimentObj["-1"], sentimentObj["0"], sentimentObj["1"],
    ];

    // Sentiment values available to other scripts
    browser.runtime.sendMessage({
        type: "sentimentValues",
        data: sentimentValues,
    });
});

