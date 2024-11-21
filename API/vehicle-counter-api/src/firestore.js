const { firestore } = require("./firebase");
const { collection, getDocs, query, where } = require("firebase/firestore");

const collectionName = "vehicleCount";

const getAllVehicleData = async () => {
  try {
    const colRef = collection(firestore, collectionName);
    const snapshot = await getDocs(colRef);

    if (snapshot.empty) {
      console.log("Data tidakd ditemukan");
      return [];
    }

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

const getAllVehicleByDateRange = async (startDate, endDate) => {
  try {
    const colRef = collection(firestore, collectionName);
    const q = query(
        colRef,
        where("date", ">=", startDate),
        where("date", "<=", endDate)
    );
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      const array = [];
      return [];
    }
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (error) {
    console.error("Error fetching data by date range:", error);
    throw error;
  }
};

module.exports = { getAllVehicleData, getAllVehicleByDateRange };