import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {

      const divElement = this.element;
      const data = JSON.parse(divElement.getAttribute('data-book-sells'));
      const id = divElement.getAttribute('book-id');
      let xvalue = [];
      for(let i = 0; i < data.length; i++){
        xvalue.push(i);
      }

    
      new Chart(`book_chart_${id}`, {
        type: "line",
        data: {
            fill:false,
            labels: xvalue,
            datasets: [{
              backgroundColor:"rgba(0,0,255,1.0)",
              borderColor: "rgba(0,0,255,0.1)",
              data: data
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
