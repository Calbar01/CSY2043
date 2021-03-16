// let element = document.getElementById('myChart'); //.getContext('2d');

// // The type of chart we want to create
// let chartType = "line";

// // The data for our dataset
// let chartData = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [ 
//             {
//             label: 'My First dataset',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [0, 10, 5, 2, 20, 30, 45]
//             }
//         ]
//     };

// // Configuration options go here
// let chartOptions = {};

// let param = {
//     type: chartType,
//     data: chartData,
//     options: chartOptions
// };

// let chart = new chart(element, param);

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(20, 99, 132)',
            borderColor: 'rgb(20, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});


