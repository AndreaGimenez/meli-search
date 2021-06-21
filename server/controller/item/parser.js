const {author, getItemData} = require("../utils");

const parseItemByIdResult = (data) => {
    const item = getItemData(data);
    item.picture = data.pictures && data.pictures[0] &&  data.pictures[0].secure_url;
    item.sold_quantity = data.sold_quantity;

    return {
        author,
        item,
        categories: [],
    };
};

const parseDescription = (data) => {
    return data.plain_text;
}

module.exports = {
    parseItemByIdResult,
    parseDescription,
};
