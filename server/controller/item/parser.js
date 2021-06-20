const {author, getItemData} = require("../utils");

const parseItemByIdResult = (data) => {
    const item = getItemData(data);
    item["picture"] = data.pictures && data.pictures[0] &&  data.pictures[0]["secure_url"];
    item["sold_quantity"] = data.sold_quantity;

    return {
        author: {...author},
        item: {...item},
        categories: [],
    };
};

const parseDescription = (data) => {
    return data.plain_text;
}

const parseCategory = (data) => data.path_from_root.map(parent => parent.name);

module.exports = {
    parseItemByIdResult,
    parseDescription,
    parseCategory
};
