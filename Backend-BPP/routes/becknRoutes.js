// routes/becknRoutes.js
const express = require('express');
const router = express.Router();
const onSearchController = require('../controllers/onSearchController');
const onSelectController = require('../controllers/onSelectController');
const onInitController  = require('../controllers/onInitController');
const confirmController = require('../controllers/confirmController');

router.post('/bpp/on_search', onSearchController.handleSearch);
router.post('/bpp/on_select', onSelectController.handleSelect);
router.post('/bpp/on_init', onInitController.onInit);
router.post('/bpp/on_confirm', confirmController.handleConfirm);
module.exports = router;
