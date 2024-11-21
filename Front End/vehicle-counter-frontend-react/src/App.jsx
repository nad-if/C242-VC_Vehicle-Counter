import { useState, useEffect } from "react";
import connectMQTT from "./mqttclient";

// import fs from "fs";

function App() {
  const [message, setMessage] = useState([]);
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [response, setResponse] = useState(null);
  const [dataByDate, setDataByDate] = useState(null);

  const brokerUrl = "wss://wa518485.ala.asia-southeast1.emqxsl.com:8084/mqtt";
  const topic = "python/mqtt";

  const fetchAllVehicleData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/vehicle/");
      const data = await res.json();
      setResponse(data.data);
    } catch (err) {
      console.error("Failed to fetch vehicle data:", err);
    }
  };

  const fetchVehicleByDate = async () => {
    if (!startDate || !endDate) {
      alert("Masukkan tanggal mulai dan tanggal akhir");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/vehicle/range?startDate=${startDate}&endDate=${endDate}`
      );
      const data = await res.json();
      setDataByDate(data.data);
    } catch (err) {
      console.error("Failed to fetch vehicle data by date range:", err);
    }
  };

  const formatDate = (seconds) => {
    const date = new Date(seconds * 1000);
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const client = connectMQTT(brokerUrl);

    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(`Subscribed to ${topic}`);
      } else {
        console.error(`Failed to subscribe to ${topic}:`, err);
      }
    });

    client.on("message", (receivedTopic, payload) => {
      if (receivedTopic === topic) {
        const message = payload.toString();
        console.log(`Received messasge: ${message}`);
        setMessage((prevMessages) => [...prevMessages, message]);
        setCount((prevCount) => prevCount + 1);
      }
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <div>
        <h1>Vehicle Counter</h1>
        <hr />
        <button onClick={fetchAllVehicleData}>Ambil semua data</button>
        {response && <p>Total kendaraan: {response.length}</p>}
        <div>
          {response && (
            <ul>
              {response.map((item) => (
                <li key={item.id}>
                  Tanggal: {formatDate(item.date.seconds)}, Lokasi:
                  {item.location}, Jumlah kendaran: {item.totalCount}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr />
      <section>
        <h3>Ambil data berdasarkan tanggal mulai dan tanggal akhir</h3>
        <label>
          Tanggal Mulai:{""}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
        </label>
        <label>
          Tanggal Akhir:{""}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </label>
        <div>
          <button onClick={fetchVehicleByDate}>Ambil data!</button>
          {dataByDate && (
            <ul>
              {dataByDate.map((item) => (
                <li key={item}>
                  Tanggal:{formatDate(item.date.seconds)}, Lokasi:
                  {item.location}, Banyak Kendaraan:{item.totalCount}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <hr />
      <div>
        <h2>Banyak pesan yang masuk: {count}</h2>
        <ul>
          {message.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
