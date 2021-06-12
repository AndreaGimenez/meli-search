const { Router } = require('express');
const router = Router();

const {
    getSearchResults,
} = require('../controller/index');

router.get('/api/items', getSearchResults);

module.exports = router;
