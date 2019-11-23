import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {
   history = []; // для начала, пусть будет массив прямо здесь
  public weight :number;
  public height :number;
  public age: number;
  public BMI :number;
  showHistory: boolean;


  bmi()
  {
    this.BMI = this.weight / (this.height * this.height);
    if(this.BMI >= 18.5 && this.BMI <= 25)
    {
      alert("weight ok");
    }
    else
    {
      alert("weight is not ok");
    }
    // когда посчитали, сразу положим данные в массив
    this.history.push({
      age: this.age,
      weight: this.weight,
      height: this.height,
      bmi: this.BMI
    }); // теперь у нас должны накапливаться тут введенные значения
  }
  story()
  {
    this.showHistory = !this.showHistory;
  }

}
