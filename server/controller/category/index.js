const {fetchData} = require("../fetch");
const {CATEGORY_BASE_URL} = require("../constants");
const {parseCategory} = require("./parser");


const getCategoryById = async (id) => {
    const categoryUrl = `${CATEGORY_BASE_URL}${id}`; 
    return await fetchData(categoryUrl, parseCategory);
};

module.exports = {
    getCategoryById
};
