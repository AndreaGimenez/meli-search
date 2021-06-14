const fetch = require('node-fetch');

const fetchData = async (url, parse) => {
    try {
        let response = await fetch(url);
        response = await response.json();
        return parse(response);
    } catch(error){
        res.send({error});
    }
};

module.exports = {
    fetchData
}