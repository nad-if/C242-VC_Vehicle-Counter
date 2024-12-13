import { MQTT_BROKER_URL } from '../script/config.js'

const deviceInfo = {
  cameraId: "34:D1:45:16:59:65",
  name: "Camera Logitech",
  ipAddress: "103.123.98.100",
  connection: MQTT_BROKER_URL,
  lastUpdateData: new Date().toLocaleString(),
  location: "Limau Manis, Padang",
};

export default deviceInfo;