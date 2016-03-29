var reqwest = require("reqwest");

var url = "http://localhost:3000";

var marketingApi = "/marketings";

function getMarketingData() {
    return reqwest(url + marketingApi);
}

module.exports = {
    getMarketingData: getMarketingData
};