document.addEventListener("DOMContentLoaded", function() {
      const ctx1 = document.getElementById('chart1').getContext('2d');
      const chart1 = new Chart(ctx1, {
          type: 'bar',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
  
      const ctx2 = document.getElementById('chart2').getContext('2d');
      const chart2 = new Chart(ctx2, {
          type: 'line',
          data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                  label: 'Sales',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  backgroundColor: 'rgba(153, 102, 255, 0.2)',
                  borderColor: 'rgba(153, 102, 255, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
      });
  
      const ctx3 = document.getElementById('chart3').getContext('2d');
      const chart3 = new Chart(ctx3, {
          type: 'pie',
          data: {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
              }]
          }
      });
  
      const ctx4 = document.getElementById('chart4').getContext('2d');
      const chart4 = new Chart(ctx4, {
          type: 'doughnut',
          data: {
              labels: ['Red', 'Blue', 'Yellow'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
              }]
          }
      });
  });
  