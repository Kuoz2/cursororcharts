import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {

      const divElement = this.element;
      const data = JSON.parse(divElement.getAttribute('data-day-sells'));
      const color = ['red', 'green', 'blue', 'orange', 'brown', 'purple', 'yellow'];
      let days = [];
      let total = [];

      data.forEach(element => {
        days.push(element[0])
        total.push(element[1])
      });
      
      new Chart("daySells", {
        type: "bar",
        data: {
          labels: days,
          datasets: [{
            backgroundColor: color,
            data: total
          }]
        },
        options:{
          legend:{
            legend:{display:false},
            title:{display: false}
          }, 
        }
      });
      }
}
