const express = require('express');
const router  = express.Router();

const fData = require('./data.functions')
const fLocales = require('./locales.functions')

router.post('/crear_locales', fData.crear_locales)
router.post('/crear_noche', fData.crear_noche)
router.post('/get_noches', fData.get_noches)
router.post('/get_one_noche', fData.get_one_noche)
router.post('/update_noche', fData.update_one_noche)
router.post('/delete_noche', fData.delete_one_noche)

router.get('/get_locales', fLocales.get_locales)

module.exports = router;