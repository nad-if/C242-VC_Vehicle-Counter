import deviceInfo from "../../utils/DeviceInfortaion";

const DeviceInformation = () => {
  return (
    <div className="p-6 bg-white shadow rounded-lg my-4">
      <div className="flex items-center mb-4 gap-2">
        <h2 className="text-lg font-semibold text-gray-700">
          Device Information
        </h2>
        <span className="flex items-center px-2 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-lg">
          <span className="w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
          Online
        </span>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-6 md:grid-cols-3">
        <DeviceInfo label="Camera ID" value={deviceInfo.cameraId} />
        <DeviceInfo label="Name" value={deviceInfo.name} />
        <DeviceInfo label="IP Address" value={deviceInfo.ipAddress} />
        <DeviceInfo label="Connection" value={deviceInfo.connection} />
        <DeviceInfo label="Last Update Data" value={deviceInfo.lastUpdateData} />
        <DeviceInfo label="Group" value={deviceInfo.group} />
        <DeviceInfo label="Location" value={deviceInfo.location} />
      </div>
    </div>
  );
};

const DeviceInfo = ({ label, value }) => (
  <div>
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className="text-base font-semibold text-gray-700">{value}</p>
  </div>
);

export default DeviceInformation;
