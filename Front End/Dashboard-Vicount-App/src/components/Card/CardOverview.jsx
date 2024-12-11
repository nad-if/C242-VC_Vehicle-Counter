import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker"; // Install via `npm install react-datepicker`
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DataOverview = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [chartData, setChartData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/api/vehicle/range", {
        params: {
          startDate: startDate.toISOString().split("T")[0],
          endDate: endDate.toISOString().split("T")[0],
        },
      });

      const formattedData = response.data.data.map((item) => ({
        date: new Date(item.date.seconds * 1000).toISOString().split("T")[0],
        totalCount: item.totalCount || 0,
        car: item.car || 0,
        bus: item.bus || 0,
        motorcycle: item.motorcycle || 0,
        truck: item.truck || 0,
      }));

      setChartData(formattedData);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg my-4">
      <h2 className="text-lg font-semibold mb-4">Vehicle Data Overview By Date</h2>

      {/* Form for date range */}
      <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="start-date" className="block text-sm font-medium">
            Start Date
          </label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            className="appearance-none bg-white px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="end-date" className="block text-sm font-medium">
            End Date
          </label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            className="appearance-none bg-white px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Apply
        </button>
      </form>

      {/* Chart Section */}
      {chartData.length > 0 && (
        <div className="mt-6">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalCount" stroke="#8884d8" name="Total Count" />
              <Line type="monotone" dataKey="car" stroke="#82ca9d" name="Car" />
              <Line type="monotone" dataKey="bus" stroke="#ffc658" name="Bus" />
              <Line type="monotone" dataKey="motorcycle" stroke="#ff7300" name="Motorcycle" />
              <Line type="monotone" dataKey="truck" stroke="#d0ed57" name="Truck" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default DataOverview;
