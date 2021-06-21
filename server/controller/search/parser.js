const {author, getItemData} = require("../utils");

const parseSearchResults = (data) => {
    const parsedData = {
        author,
        categories: getCategory(data),
        items: [],
    };

    data.results.forEach(result => {
        const item = getItemData(result);
        item.picture = result.thumbnail;
        item.address = result.address.city_name;
        parsedData.items.push(item);
    });

    return parsedData;
}

const getCategory = ({filters}) => {
    const category = filterCategory(filters);
    return category ? category.values[0].path_from_root.map(parent => parent.name) : [];
}

const filterCategory = (filters) => filters.find(({ id }) => id === "category"); 


module.exports = {
    parseSearchResults,
};
