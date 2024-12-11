import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import axios from "axios";

const TrafficVehicle = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/vehicle');
        const apiData = response.data.data;

        console.log("Raw API Data:", apiData);

        const transformedData = apiData.map((item) => ({
          time: new Date(item.date.seconds * 1000).toLocaleDateString(),
          total: Number(item.totalCount) || 0,
          car: Number(item.car) || 0,
          truck: Number(item.truck) || 0,
          motorcycle: Number(item.motorcycle) || 0,
          bus: Number(item.bus) || 0,
          bicycle: Number(item.bicycle) || 0,
        }));

        setData(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 lg:col-span-2">
      <h2 className="text-xl font-semibold mb-4">Traffic Vehicle Trend</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />

            {/* Garis untuk Total Kendaraan */}
            <Line
              type="monotone"
              dataKey="total"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ stroke: "#10B981", strokeWidth: 2 }}
            />

            {/* Garis untuk Mobil */}
            <Line
              type="monotone"
              dataKey="car"
              stroke="#3B82F6"
              strokeWidth={2}
              dot={{ stroke: "#3B82F6", strokeWidth: 2 }}
            />

            {/* Garis untuk Truk */}
            <Line
              type="monotone"
              dataKey="truck"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={{ stroke: "#F59E0B", strokeWidth: 2 }}
            />

            {/* Garis untuk Motor */}
            <Line
              type="monotone"
              dataKey="motorcycle"
              stroke="#EC4899"
              strokeWidth={2}
              dot={{ stroke: "#EC4899", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficVehicle;
