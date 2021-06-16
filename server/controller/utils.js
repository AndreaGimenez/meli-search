const getPriceDecimals = (price, n) => (price - Math.trunc(price)).toFixed(n);

const author = {
    name: "Andrea" ,
    lastname: "Giménez",
};

const getItemData = (data) => ({
    id: data.id,
    title: data.title,
    price: {
        currency: data.currency_id,
        amount: Math.floor(data.price),
        decimals: getPriceDecimals(data.price, 2),
    },
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
});

module.exports = {
    getPriceDecimals,
    author,
    getItemData
}