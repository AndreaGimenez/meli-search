const author = {
    name: "Andrea" ,
    lastname: "Giménez",
};

const NUMBER_PART = 0;
const DECIMAL_PART = 1;

const getPriceParts = (price, part) => price.toLocaleString("es-AR").split(",")[part];

const getItemData = ({id, title, currency_id: currency, price, condition, shipping, category_id}) => ({
    id,
    title,
    price: {
        currency,
        amount: getPriceParts(price, NUMBER_PART),
        decimals: getPriceParts(price, DECIMAL_PART),
    },
    condition,
    free_shipping: shipping.free_shipping,
    category_id
});

module.exports = {
    author,
    getItemData
};
