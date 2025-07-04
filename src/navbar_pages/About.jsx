import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

function About() {
  const chartRef = useRef(null);

  const data = [
      { date: '2024-04-23', weight: 2.83 },
      { date: '2024-04-29', weight: 2.87 },
      { date: '2024-05-06', weight: 3.34 },
      { date: '2024-05-23', weight: 3.72 },
      { date: '2024-06-25', weight: 5.09 },
      { date: '2024-07-09', weight: 5.56 },
      { date: '2024-08-27', weight: 6.40 },
      { date: '2024-09-21', weight: 7.08 },
      { date: '2024-10-23', weight: 7.20 },
      { date: '2024-11-18', weight: 7.62 },
      { date: '2025-02-18', weight: 8.50 },
      { date: '2025-04-24', weight: 9.04 },
  ];

  useEffect(() => {
    Chart.register(...registerables);

    const ctx = document.getElementById('myChart').getContext('2d');

    // Destroy the previous chart, if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Weight',
            data: data.map((item) => ({
              x: item.date,
              y: item.weight,
            })),
            borderColor: 'blue',
            fill: false,
            tension: 0.3, // Adjust the tension value to control the curve
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: {
                //day: 'yyyy-MM-dd',
                month: 'MMM yyyy',
              },

            },
          },
          y: {
              type: 'linear',
              unit: 'kg',
              beginAtZero: true,
              ticks: {
              callback: function(value, index, ticks) {
                return value + ' kg';
              }
            }
          },
        },
      },
    });

    // Create the data table
    const dataTable = document.getElementById('dataTable');
    const tableBody = dataTable.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach((item) => {
      const row = document.createElement('tr');
      const dateCell = document.createElement('td');
      const weightCell = document.createElement('td');

      dateCell.textContent = item.date;
      weightCell.textContent = item.weight;

      row.appendChild(dateCell);
      row.appendChild(weightCell);
      tableBody.appendChild(row);
    });
  }, []);

  return (
    <div>
      <h5> Chart.js </h5>
      <h3> Jason's weight changes over the given time period </h3>
      <canvas id="myChart"></canvas>

      <br/>

      <table id="dataTable">
        <thead>
          <tr>
            <th>Date</th>
            <th> Weight(KG)</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default About;

/*
import React, { useEffect ,useRef  } from 'react';
import { Chart, registerables,LineController, LineElement, PointElement, LinearScale, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

function About() {

  Chart.register(...registerables);

  const chartRef = useRef(null);
  
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Destroy the previous chart, if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Weight(KG)',
            data: [
              { x: '2024-04-23', y: 2.83 },
              { x: '2024-04-29', y: 2.87 },
              { x: '2024-05-06', y: 3.34 },
              { x: '2024-05-23', y: 3.72 },
              { x: '2024-06-25', y: 5.09 },
              { x: '2024-07-09', y: 5.56 },
              { x: '2024-08-27', y: 6.40 },
              { x: '2024-09-21', y: 7.08 }
            ],
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              displayFormats: {
                day: 'yyyy-MM-dd',
              },
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="myChart" ></canvas>
    </div>
  );
}

export default About;
*/

/*
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chart.js/auto'; // Import this to register all chart types

Chart.register(...registerables);

const MyChart = ({ data, type }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Cleanup on re-render
    }

    const myChartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(myChartRef, {
      type: type,
      data: {
        labels: data.map(item => item.label), // Assuming each item has a 'label' property
        datasets: [{
          label: 'My Data',
          data: data.map(item => item.value), // Assuming each item has a 'value' property
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        // Customize options here (scales, legends, etc.)
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, type]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};


// Example usage:
//<MyChart data={chartData} type="bar" />
//<MyChart data={chartData} type="line" />
const chartData = [
  { label: 'A', value: 10 },
  { label: 'B', value: 20 },
  { label: 'C', value: 15 }
];

function About() {
    return (
        <div>
            <MyChart data={chartData} type="bar" />
            <MyChart data={chartData} type="line" />
        </div>
    );
}

export default About
*/