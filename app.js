const _ = require("loadash");
const items = [1, [2, [3, [4]]]];
const newsItems = _.flattenDeep(items);
console.log(newsItems);
