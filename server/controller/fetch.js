const fetch = require("node-fetch");

const fetchData = async (url, parse) => {
    try {
        const response = await fetch(url);
        return parse(await response.json());
    } catch(error){
        return error;
    }
};

module.exports = {
    fetchData
};
