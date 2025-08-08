import React, { useEffect,useState , useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

import i18n from '../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';


function get_data(){

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
      { date: '2025-08-06', weight: 9.83 },
  ];

  return data;
}


function Chart_func() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const chartRef = useRef(null);

  const data = get_data();
  /*
    const [data, setData] = useState([]); // State to hold dynamic data

    useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch('/api/get-data'); // Replace with your API endpoint
          const result = await response.json();
          const formattedData = result.map((item) => ({
            date: item.v_date, // Assuming `v_date` is the column name in your database
            weight: item.v_weight, // Assuming `v_weight` is the column name in your database
          }));
          setData(formattedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

  */

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
            borderWidth: 2,
            //dataWithUnits:data + 'KG'
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
              min: 0, // Set minimum value for y-axis
              max: 12, // Set maximum value for y-axis
              ticks: {
                stepSize: 1, // Set the step size of the y-axis ticks
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
      weightCell.textContent = item.weight  + ' kg';

      row.appendChild(dateCell);
      row.appendChild(weightCell);
      tableBody.appendChild(row);
    });
    
    // Create the data table



  }, []);

  return (

    <div style={{"display": "flex", "flex-direction": "column" , "padding":"10px 20px","maxWidth":"800px" }}>     
    <div>
      <h5> </h5>
      <h3>  {t('Navbar_about_page_title')} </h3>
      <div style={ 
                    {"minWidth":"300px" 
                      ,"minHeight":"400px" 
                    }  
                } >
        <canvas id="myChart" ></canvas>
      </div>
      <br/>
    </div>

        <table id="dataTable" 
          style={ 
                  {  "minWidth":"300px" 
                  }  
                }
        >
        <thead>
          <tr>
            <th style={ {"minWidth":"100px", textAlign: "left", border: '1px solid black' }}>Date</th>
            <th style={ {"minWidth":"100px", textAlign: "left", border: '1px solid black' }}>Weight(KG)</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>



    </div>
  );
}

function About() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Loading...');

  const performAsyncTask = () => {
    return new Promise(resolve => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        console.log('Function executed!');
        resolve();
      }, 1000); // Simulate task duration
    });
  };

  useEffect(() => {
    // Set loading state and start the process
    setLoading(true);
    setStatus('Loading...');

    // Combine the 2-second loading delay with the async function execution
    const timer = setTimeout(() => {
      performAsyncTask().then(() => {
        setLoading(false);
        setStatus('');
      });
    }, 300); // Show loading for at least 0.7 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {loading ? (
        <p>{status}</p>
      ) : (
        <>
          <Chart_func/>
        </>
      )}
    </div>
  );
}

export default About;

/*
import React, { useEffect,useState , useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

import i18n from '../i18n.jsx' ; // Import the i18n configuration
import { useTranslation } from 'react-i18next';


function Chart_func() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
            borderWidth: 2,
            //dataWithUnits:data + 'KG'
          },
        ],
      },
      options: {
        //responsive: true,
        //maintainAspectRatio: false,
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

    <>     
    <div>
      <h5> Chart.js </h5>
      <h3>  {t('Navbar_about_page_title')} </h3>
      <div style={ {"maxWidth":"800px" , "padding":'20px' }  } >
        <canvas id="myChart" ></canvas>
      </div>
      <br/>

      <table id="dataTable" style={{padding:'20px'}}  >
        <thead>
          <tr>
            <th>Date</th>
            <th> Weight(KG)</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    </>
  );
}

function About() {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('Loading...');

  const performAsyncTask = () => {
    return new Promise(resolve => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        console.log('Function executed!');
        resolve();
      }, 1000); // Simulate task duration
    });
  };

  useEffect(() => {
    // Set loading state and start the process
    setLoading(true);
    setStatus('Loading...');

    // Combine the 2-second loading delay with the async function execution
    const timer = setTimeout(() => {
      performAsyncTask().then(() => {
        setLoading(false);
        setStatus('');
      });
    }, 300); // Show loading for at least 0.7 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      {loading ? (
        <p>{status}</p>
      ) : (
        <>
          <Chart_func/>
        </>
      )}
    </div>
  );
}

export default About;
*/