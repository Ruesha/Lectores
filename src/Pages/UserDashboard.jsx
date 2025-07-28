import React, { useState } from "react";
import booksBg from "../assets/images/books.avif";
import { PiBooksDuotone } from "react-icons/pi";
import { GiFinishLine } from "react-icons/gi";
import { LiaBookReaderSolid } from "react-icons/lia";
import HeaderTwo from "../Static/HeaderTwo";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Activity Level",
      data: [3, 5, 2, 8, 6, 7, 4],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderWidth: 2,
      fill: true,
    },
  ], 
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: "User Activity Over the Week" },
  },
};

const UserDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  return (
    <div
      className=" min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${booksBg})`,
      }}
    >
      <HeaderTwo />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-6 shadow-md min-h-screen ">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
            <h2 className="text-lg font-semibold mt-3">Ruesha</h2>
            <p className="text-gray-500">ruesha@fake.com</p>
          </div>
          <ul className="space-y-2">
            {[
              "Dashboard",
              "My Profile",
              "My Order",
              "Terms & Conditions",
              "Sign Out",
            ].map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded cursor-pointer ${
                  selectedSection === item ? "bg-lime-400 text-white" : "bg-gray-200"
                }`}
                onClick={() => setSelectedSection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6">
          <h1 className="text-3xl font-semibold text-gray-700 mb-6">{selectedSection}</h1>

          {selectedSection === "Dashboard" && (
            <>
              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[{ icon: PiBooksDuotone, value: 100, label: "Want to Read" },
                  { icon: LiaBookReaderSolid, value: 20, label: "Reading" },
                  { icon: GiFinishLine, value: 97, label: "Finished" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <stat.icon className="text-gray-500 text-3xl mx-auto" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Chart Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Line data={chartData} options={chartOptions} />
              </div>
            </>
          )}
          {selectedSection !== "Dashboard" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Content for {selectedSection} will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
