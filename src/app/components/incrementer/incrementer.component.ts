import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {

  @Input('value')progress: number = 50;
  @Input()btnClass: string ='btn-primary';


  @Output() outValue : EventEmitter<number>= new EventEmitter();

  changeValue(valor: number):100 | 0 |void {
    if(this.progress == 100 && valor > 0){
      this.outValue.emit(100);
      return this.progress = 100;
    }
    if(this.progress == 0 && valor < 0){
      this.outValue.emit(100);
      return this.progress = 0;
    }
    this.progress= this.progress + valor;
    this.outValue.emit(this.progress);
  }

  onChange(value: number){
    if(value >= 100){
      this.progress= 100
    }
    else if(value <=0){
      this.progress=0;
    }
    else{
      this.progress = value;
    }

    this.outValue.emit(this.progress);
  }
  constructor() { }

  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`
  }

}

