const {author, getItemData} = require('../utils');

const parseSearchResults = (data) => {
    const parsedData = {
        author: {...author},
         categories: [],
         items: [],
    }

    data.results.forEach(result => {
        const item = getItemData(result);
        item["picture"] = result.thumbnail;
        parsedData.items.push(item);
    });
    
    return parsedData;
}

module.exports = {
    parseSearchResults
}