const { firestore } = require("./firebase");
const { collection, getDocs, query, where, orderBy, setDoc, doc, Timestamp } = require("firebase/firestore");

const collectionName = "vehicleCount";

const getAllVehicleData = async () => {
  try {
    const colRef = collection(firestore, collectionName);
    const q = query(colRef, orderBy("date", "asc"));
    const snapshot = await getDocs(q);

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

const saveVehicleData = async (vehicleData) => {
  try {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    const today = now.toISOString().split("T")[0];

    const docRef = doc(collection(firestore, collectionName), today);

    await setDoc(
      docRef,
      {
        ...vehicleData,
        date: Timestamp.fromDate(now),
        lastUpdated: Timestamp.fromDate(now),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Error saving data: ", error);
    throw error;
  }
}

module.exports = { getAllVehicleData, getAllVehicleByDateRange, saveVehicleData };