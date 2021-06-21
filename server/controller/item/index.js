const {fetchData} = require("../fetch");
const {getCategoryById} = require("../category");
const {parseItemByIdResult, parseDescription} = require("./parser");
const {ITEM_BASE_URL} = require("../constants");


const getItemById = async (req, res) => {
    const {id} = req.params;

    const itemUrl = `${ITEM_BASE_URL}${id}`;
    const descriptionUrl = `${itemUrl}/description`; 

    const data = await fetchData(itemUrl, parseItemByIdResult);
    const description = await fetchData(descriptionUrl, parseDescription);
    const categories = await getCategoryById(data.item.category_id);

    res.send({
        ...data,
        description,
        categories
    });
};

module.exports = {
    getItemById
};
