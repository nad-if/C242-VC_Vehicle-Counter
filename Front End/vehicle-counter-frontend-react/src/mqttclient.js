import mqtt from "mqtt";

const connectMQTT = (brokerURL) => {
  const client = mqtt.connect(brokerURL, {
    username: "berka",
    password: "berka",
    rejectUnauthorized: false,
  });

  client.on("connect", () => {
    console.log("Connected to MQTT broker");
  });

  client.on("error", (err) => {
    console.error("Error connecting to MQTT broker:", err);
    client.end();
  });

  return client;
};

export default connectMQTT;
