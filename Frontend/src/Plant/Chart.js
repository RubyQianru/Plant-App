import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Utils } from 'chart.js';

function LineChart(props){
    
    console.log(props.humiditySet)
    const chartData = {
        labels: [1,2,3,4,5],
        datasets: [
          {
            data: props.humiditySet,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],      
      }
    const chartConfig = {
        type: 'line',
        data: chartData,
      };
    
    return <Line data={chartData} options={chartConfig} />;
}

export default LineChart