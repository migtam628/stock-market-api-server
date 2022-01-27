const app = require("express")();
const browserObject = require('./browser');
const scraperController = require('./pageController');
const functions = require("firebase-functions");

let browserInstance = browserObject.startBrowser();


app.get('/scrape', (req, res) => {
    functions.logger.info("Scraper started.", { structuredData: true });
    scraperController(browserInstance, req, res)
})

// for firebase functions
// exports.web_scraper = functions.https.onRequest(app);

// for nodejs
app.listen(3000, () => {
    console.log('localhost:3000')
})
