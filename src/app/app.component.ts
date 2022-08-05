import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <p>There are two types of pipes:</p>
    <ul>
      <li>built-in pipes</li>
      <li>Custom pipes</li>
    </ul>
    <p>Pipes are represented with |</p>
    <p>The built in pipes:</p>
    <ul>
      <li>Uppercase =>  line 22</li>
      <li>Lowercase =>  line 22</li>
      <li>number =>  line 23</li>
      <li>Decimal =>  line 24</li>
      <li>Currency =>  line 25</li>
      <li>Date  =>  line 26</li>
    </ul>
    {{course.name | lowercase | uppercase}} <br>
    {{course.students | number}} <br>
    {{course.ratings | number: "2.1-2" }}<br>
    {{course.price | currency: "AUD": true:"1.1-1"}}<br>
    {{course.releaseDate | date: "shortDate"}}
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = "PIPES"
  course = {
      name: "Pipes",
      students: 5000,
      ratings: 3.3245,
      price: 654.3,
      releaseDate: new Date (2016, 7, 3)
    }
}
