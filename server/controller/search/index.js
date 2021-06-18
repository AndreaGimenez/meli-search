const {fetchData} = require("../fetch");
const {parseSearchResults} = require("./parser");
const {SEARCH_BASE_URL, MAX_ITEMS} = require("../constants");


const getSearchResults = async (req, res) => {
    const query = req.query.q;
    const url = `${SEARCH_BASE_URL}q=${query}&limit=${MAX_ITEMS}`;
    const data = await fetchData(url, parseSearchResults);
    res.send(data);
};

module.exports = {
    getSearchResults
};
