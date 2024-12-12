import { BarChart2, Bike, Truck, Car, Bus } from "lucide-react";

// Component Pakcage
import StatsCard from "../components/Card/Cardstats";
import CardTitle from "../components/Card/CardTitile";
import DataOverview from "../components/Card/CardOverview";
import DeviceInformation from "../components/Card/CardDeviceInfo";
import TrafficVehicle from "../components/Chart/TrafficVehcile";

// Script MQTT
import connectMQTT from "../script/mqttClient";

import TrafficData from "../utils/Data/Dummy/TrafficData";
import { useEffect, useState } from "react";
import axios from "axios"

const Overview = () => {
  const currentDate = new Date();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const [vehicles, setVehicles] = useState({
    total: 0,
    car: 0,
    bicycle: 0,
    motorcycle: 0,
    bus: 0,
    truck: 0,
  });

  const MQTT_BROKER = 'wss://wa518485.ala.asia-southeast1.emqxsl.com:8084/mqtt';
  const MQTT_TOPIC = 'counter/vehicles';
  const API_ENDPOINT = "https://v-count-api-660543800145.asia-southeast1.run.app/api/vehicle/save";


  const saveDataToFirestore = async (data) => {
    try {
      const response = await axios.post(API_ENDPOINT, {
        vehicleData: {
          car: data.car,
          bus: data.bus,
          truck: data.truck,
          motorcycle: data.motorcycle,
          bicycle: data.bicycle,
        },
      });
      console.log("Data saved successfully:", response.data);
    } catch (error) {
      console.error("Failed to save data to Firestore:", error);
    }
  };

  useEffect(() => {
    const client = connectMQTT(MQTT_BROKER);

    client.subscribe(MQTT_TOPIC, (err) => {
      if (!err) {
        console.log("Subscribed to", MQTT_TOPIC);
      } else {
        console.error("Failed to subscribe", err);
      }
    });

    client.on("message", (receivedTopic, payload) => {
      if (receivedTopic === MQTT_TOPIC) {
        try {
          const data = JSON.parse(payload.toString());
          setVehicles({
            total: data.car + data.bicycle + data.motorcycle + data.bus + data.truck,
            car: data.car,
            bicycle: data.bicycle,
            motorcycle: data.motorcycle,
            bus: data.bus,
            truck: data.truck,
          });
          saveDataToFirestore(data);
        } catch (err) {
          console.error("Failed to parse MQTT message", err);
        }
      }
    });

    return () => {
      client.end();
    };
  }, []);

  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions)
    .format(currentDate)
    .replace(",", "");

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          🚀 Welcome!
        </h2>
        {/* Date */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{formattedDate}</p>
      </div>

      <CardTitle />
      <DeviceInformation />


      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 my-4">
        <StatsCard
          name="Total Vehicles"
          icon={BarChart2}
          value={vehicles.total}
          color="#10B981"
        />
        <StatsCard name="Cars" icon={Car} value={vehicles.car} color="#3B82F6" />
        <StatsCard name="Trucks" icon={Truck} value={vehicles.truck} color="#F59E0B" />
        <StatsCard name="Motorcycles" icon={Bike} value={vehicles.motorcycle} color="#EC4899" />
        <StatsCard name="Bus" icon={Bus} value={vehicles.bus} color="#EC4899" />
        <StatsCard name="Bicycles" icon={Bike} value={vehicles.bicycle} color="#EC4899" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 my-4">
        <TrafficVehicle TrafficData={TrafficData} />
      </div>
      <DataOverview />
    </>
  );
};

export default Overview;
