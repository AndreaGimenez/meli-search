const {author, getItemData} = require("../utils");

const parseSearchResults = (data) => {
    const parsedData = {
        author: {...author},
        categories: getCategory(data),
        items: [],
    };

    data.results.forEach(result => {
        const item = getItemData(result);
        item["picture"] = result.thumbnail;
        item["address"] = result.address.city_name;
        parsedData.items.push(item);
    });

    return parsedData;
}

const getCategory = ({filters}) => {
    let category = filterCategory(filters);
    if (category) return category.values[0].path_from_root.map(parent => parent.name);
    return [];
}

const filterCategory = (filters) => filters.find(available_filter => available_filter.id === "category");


module.exports = {
    parseSearchResults,
};
