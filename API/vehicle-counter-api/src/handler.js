const { getAllVehicleData, getAllVehicleByDateRange, saveVehicleData } = require("./firestore");

const getAllHistoricalData = async (req, res) => {
  try {
    const data = await getAllVehicleData();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error);
  }
};

const getHistoricalByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({
        error: "startDate dan endDate harus disertakan dalam format YYYY-MM-DD",
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const data = await getAllVehicleByDateRange(start, end);

    res.status(200).json({ data });
  } catch (error) {
    console.error("Error fetching data by date range:", error);
    res.status(500).json({ error: error.message });
  }
};

const saveDataToFirestore = async (req, res) => {
  try {
    const { vehicleData } = req.body;

    if (!vehicleData || typeof vehicleData !== "object") {
      return res.status(400).json({
        error: "Data kendaraan harus diberikan dalam format JSON",
      });
    }

    await saveVehicleData(vehicleData);

    res.status(200).json({ status: "success", message: "Data save successfully" });
  } catch (error) {
    console.error("Error saving data to Firestore:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getAllHistoricalData, getHistoricalByDateRange, saveDataToFirestore };
