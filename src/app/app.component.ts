import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  geoChartData =  {
    chartType: 'GeoChart',
    dataTable: [
      ['Country', 'Num of shared'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ],
    options: {'title': 'Wordmap'},
  };
}
