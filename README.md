# Brand sentiment analysis extension for X

## Intro
This extension aims to makes it simple for users to access and analyse tweets directly from their web browser, eliminating the need to switch between applications.

## Background
Sentiment analysis analyses text data to determine the emotional tone or sentiment of the text. Brand sentiment analysis analyses public opinion about a brand by examining the sentiments expressed in social media posts. This can help companies understand how customers feel about their products or services, and identify areas for improvement. This extension uses a pre-trained natural language processing (NLP) model to analyse text data for sentiment.

## Browser compatibility
This extension currently runs in Chrome. To run it in Firefox:
- Inside `manifest.json`, change `manifest_version` from `3` to `2`.
- In `background.js`, `tweet-sentiment.js`, and `popup.js`, replace all instances of `chrome` with `browser`

