const author = {
    name: "Andrea" ,
    lastname: "Giménez",
};

const NUMBER_PART = 0;
const DECIMAL_PART = 1;

const getPriceParts = (price, part) => price.toLocaleString("es-AR").split(",")[part];

const getItemData = (data) => ({
    id: data.id,
    title: data.title,
    price: {
        currency: data.currency_id,
        amount: getPriceParts(data.price, NUMBER_PART),
        decimals: getPriceParts(data.price, DECIMAL_PART),
    },
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    category_id: data.category_id
});

module.exports = {
    author,
    getItemData
};
