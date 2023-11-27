import React, { useEffect, useState } from "react";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { Utils } from 'chart.js';

function LineChart(props){
    const chartData = {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [
          {
            label: "Humidity",
            data: props.humiditySet,
            backgroundColor: "rgba(165,229,255)",
            borderColor: 'transparent',
            fill: true,
            pointHoverRadius: 20,
            pointHoverBorderWidth: 5,
            type: "line",
            order: 0,
            lineTension: 0.40,
          },
        ],      
      }
    const chartConfig = {
        type: 'line',
        data: chartData,
        responsive: true,
        animation: {
          duration: 1000,
          easing: "easeInBounce",
        },
        elements: { 
        	point: {
          	radius: 0,
          	hitRadius: 5, 
            hoverRadius: 5 
          } 
        },
    		legend: {
        		display: false,
        },
        scales: {
          x: {
            grid: {
              display: false, // hide x-axis grid lines
              drawBorder: false, // hide x-axis border
            },
            ticks: {
              display: false, // hide x-axis labels
            },
          },
          y: {
            grid: {
              display: false, // hide y-axis grid lines
              drawBorder: false, // hide y-axis border
            },
          },
        },
        
      
      };
    
    return <Line data={chartData} options={chartConfig} />;
}

export default LineChart