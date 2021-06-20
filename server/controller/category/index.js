const {fetchData} = require("../fetch");
const {CATEGORY_BASE_URL} = require("../constants");
const {parseCategory} = require("./parser");


const getCategoryById = async (id) => {
    const category_url = `${CATEGORY_BASE_URL}${id}`;
    const categories = await fetchData(category_url, parseCategory);
    return categories;
};

module.exports = {
    getCategoryById
};
