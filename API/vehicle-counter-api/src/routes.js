const express = require("express");
const { getAllHistoricalData, getHistoricalByDateRange, saveDataToFirestore } = require("./handler");

const router = express.Router();

router.get(`/vehicle`, getAllHistoricalData);

router.get(`/vehicle/range`, getHistoricalByDateRange);

router.post(`/vehicle/save`, saveDataToFirestore);

module.exports = router;