const fetch = require('node-fetch');

const getSearchResults = (req, res) => {
    const query = req.query.q
    const url = encodeURI(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        formattedData=formatData(json)
        res.send(formattedData);
    })
    .catch(err => {
        res.send({error: err});
      });
}

const formatData = (data) => {
    const formattedData = {
        author: {
            name: "Andrea" ,
            lastname: "Giménez",
        },
         categories: [],
         items: [],
    }

    data.results.map(result => {
        const item = {
            id: result.id,
            title: result.title,
            price: {
                currency: result.currency_id,
                amount: result.price,
                decimals: (result.price - Math.trunc(result.price)).toFixed(2)
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
        }
        formattedData.items.push(item);
    });
    return formattedData;
}

module.exports = {
    getSearchResults
}
