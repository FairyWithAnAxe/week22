const Chart = require ('chart.js');
const moment = require ('moment');
const Granim = require ('granim');

// var granimInstance = new Granim({
//     element: '#canvas-complex',
//     direction: 'left-right',
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 [
//                     { color: '#833ab4', pos: .2 },
//                     { color: '#fd1d1d', pos: .8 },
//                     { color: '#38ef7d', pos: 1 }
//                 ], [
//                     { color: '#40e0d0', pos: 0 },
//                     { color: '#ff8c00', pos: .2 },
//                     { color: '#ff0080', pos: .75 }
//                 ],
//             ]
//         }
//     }
// });

var granimInstance = new Granim({
    element: '#logo-canvas',
    direction: 'left-right',
    states : {
        "default-state": {
            gradients: [
                ['#EB3349', '#F45C43'],
                ['#FF8008', '#FFC837'],
                ['#4CB8C4', '#3CD3AD'],
                ['#24C6DC', '#514A9D'],
                ['#FF512F', '#DD2476'],
                ['#DA22FF', '#9733EE']
            ],
            transitionSpeed: 2000
        }
    }
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        datasets: [{
            label: '# Everyday activity: number of steps',
            data: [5050, 4040, 3030, 2020, 1010, 5050],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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

document.getElementById ("date").innerHTML += moment().format('LLLL');