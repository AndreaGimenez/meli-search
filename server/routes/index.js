const { Router } = require('express');
const router = Router();

const { getSearchResults } = require('../controller/search/index');
const { getItemById } = require('../controller/item/index');

router.get('/api/items', getSearchResults);
router.get('/api/items/:id', getItemById);

module.exports = router;
