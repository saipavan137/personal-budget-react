import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as d3 from "d3";
import Chart from 'chart.js/auto';
function HomePage() {
  const dataSource = {
    labels: [],
    datasets: [
      {
        label: 'My First Dataset',
        data: [],
        backgroundColor: [
          '#f6931f', '#673ab7 ', '#87d37c ', '#f8b270 ', '#2980b9 ', '#e74c3c ', '#7d3c98 ','#c0c0c0   '
        ],
        hoverOffset: 4
      }]
  };

  const createChart = () => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var existingChart = Chart.getChart(ctx);
    if (existingChart) {
      // If an existing Chart instance is found, destroy it
      existingChart.destroy();
    }
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: dataSource
    });
  }

  const drawD3Chart = () => {

    let svg = d3.select("#dChart").select("svg");
if (!svg.empty()) {
  // If SVG exists, remove it before creating a new one
  svg.remove();
}
    const data = dataSource.datasets[0].data; // Your data array
    const labels = dataSource.labels; // Your labels array
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    // Create an SVG element within the "dChart" div
     svg = d3.select("#dChart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create a D3.js pie layout
    const pie = d3.pie().value((d) => d);

    // Generate the arc data for the pie slices
    const arcData = pie(data);

    // Create an arc generator
    const arc = d3.arc()
      .innerRadius(100)
      .outerRadius(radius);

    // Create and append path elements for each pie slice
    svg.selectAll("path")
      .data(arcData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => dataSource.datasets[0].backgroundColor[i]);

    // Create and append text labels for each pie slice
    svg.selectAll("text")
      .data(arcData)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text((d, i) => labels[i]);
  };

  const getBudget = () => {
    axios.get('/budget.json').then(function (res) {
      console.log(res);
      for (var i = 0; i < res.data.myBudget.length; i++) {
        dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        dataSource.labels[i] = res.data.myBudget[i].title;
      }
      drawD3Chart();
    });
  }

  useEffect(() => {
    getBudget();
    createChart(); // You can call createChart here if you want to initialize the Chart.js chart
  }, []);

  return (
    <div className="container center" id="main-content">
      <div className="page-area">
            <div class="text-box">
                <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
                </article>
            </div>
    
            <div class="text-box">
                <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
                </article>
            </div>
    
            <div class="text-box">
                <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
                </article>
            </div>
    
            <div class="text-box">
                <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
                </article>
            </div>
    
            <div class="text-box">
                <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
                </article>
            </div>
    
            <div class="text-box">
                <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
                </article>
            </div>
    
            <div class="text-box">
                <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
                </article>
            </div>
            </div>
            <article>
          <div className="D3js">
            <h1>D3JS Chart</h1>
            <p>
              <div id="dChart" width="1000" height="1000"></div>
            </p>
          </div>
        </article>
        <article>
          <div className="text-box">
            <h1>Chart</h1>
            <p>
              <canvas id="myChart" width="400" height="400"></canvas>
            </p>
          </div>
        </article>
      </div>
  );
}

export default HomePage;
