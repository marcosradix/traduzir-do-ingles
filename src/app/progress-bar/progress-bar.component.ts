import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
progressBar: number = 10;
  constructor() { }

  ngOnInit() {
  }
  getPercent():number{
    return this.progressBar;
  }

  incrementarProgresso(){
    if(this.progressBar !=100 && this.progressBar>=0){
      this.progressBar += 10;
    }
  }
}
