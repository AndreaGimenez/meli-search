const {fetchData} = require("../fetch");
const {parseItemByIdResult, parseDescription} = require("./parser");
const {ITEM_BASE_URL} = require("../constants");


const getItemById = async (req, res) => {
    const id = req.params.id;
    const item_url = `${ITEM_BASE_URL}${id}`;
    const description_url = `${item_url}/description`;
    const data = await fetchData(item_url, parseItemByIdResult);
    const description = await fetchData(description_url, parseDescription);
    data["description"] = description;
    res.send(data);
};

module.exports = {
    getItemById
};
