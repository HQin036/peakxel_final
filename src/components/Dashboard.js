import React from 'react';
import CircularProgressBar from './CircularProgressBar';
import LineChart from './LineChart';
import BarChart from './BarChart';
import './Dashboard.css';

const Dashboard = () => {
  const pingData = {
    labels: ['1 min', '2 min', '3 min', '4 min', '5 min'],
    datasets: [
      {
        label: 'Ping (ms)',
        data: [20, 25, 30, 25, 20],
        borderColor: '#4a90e2',
        fill: false,
      },
    ],
  };

  const playerCountData = {
    labels: ['1 min', '2 min', '3 min', '4 min', '5 min'],
    datasets: [
      {
        label: 'Player Count',
        data: [5, 6, 7, 6, 5],
        backgroundColor: '#4a90e2',
      },
    ],
  };

  const uptimeData = {
    labels: ['1 min', '2 min', '3 min', '4 min', '5 min'],
    datasets: [
      {
        label: 'Uptime (%)',
        data: [100, 99.5, 100, 99.8, 100],
        borderColor: '#4a90e2',
        fill: false,
      },
    ],
  };

  const circularProgressData = [
    { value: 17.39, text: 'CPU' },
    { value: 18.15, text: 'Memory' },
    { value: 31.33, text: 'Storage' },
  ];

  return (
    <div className="dashboard">
      <h1>Minecraft Server Dashboard</h1>
      <div className="circular-progress-section">
        {circularProgressData.map((data, index) => (
          <CircularProgressBar key={index} value={data.value} text={data.text} />
        ))}
      </div>
      <div className="chart-section">
        <div className="chart-container">
          <h2>Ping/Latency</h2>
          <LineChart data={pingData} />
        </div>
        <div className="chart-container">
          <h2>Player Count</h2>
          <BarChart data={playerCountData} />
        </div>
        <div className="chart-container">
          <h2>Server Uptime</h2>
          <LineChart data={uptimeData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
