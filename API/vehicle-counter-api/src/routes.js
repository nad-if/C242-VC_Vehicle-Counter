const express = require("express");
const { getAllHistoricalData, getHistoricalByDateRange } = require("./handler");

const router = express.Router();

router.get(`/vehicle`, getAllHistoricalData);

/**
 * Endpoint untuk mendapatkan data berdasarkan rentang waktu
 * Contoh: GET /api/vehicle/range?startDate=2024-11-01&endDate=2024-11-20
 */
router.get(`/vehicle/range`, getHistoricalByDateRange);

module.exports = router;
