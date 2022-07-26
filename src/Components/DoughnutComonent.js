import Chart from 'chart.js/auto';
import axios from "axios";



const get_doughnut = async (user_id) => {

    const url = "http://127.0.0.1:8000/sentiments/" + user_id
    await axios.get(url,{ crossDomain: true })
        .then((response) => {
            donught(response['data']['text']);
        }).catch(error => {
            console.log('invalid user', error);
        });
};


const donught = (response) => {
    var myChart = null;
    const data = {
        labels: 
            Object.keys(response)
            ,
        datasets: [{
            label: 'Twitter Sentiment Ratio',
            data: Object.values(response),
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(54, 150, 135)',
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    align : 'end'
                    
                }
            }
        }
    };

    if(myChart != null){
        myChart.destroy();
    }
    myChart = new Chart(
        document.getElementById('canvas1'),
        config
    );

}


export default get_doughnut;