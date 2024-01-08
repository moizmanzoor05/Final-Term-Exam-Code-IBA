const express = require ('express');
const {createPoetry, getPoetries} = require ("../controller/poetryController");

const router = express.Router();

router.post('/createPoetry', createPoetry);
router.get('/getPoetries', getPoetries);

module.exports = router