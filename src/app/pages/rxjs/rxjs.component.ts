import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,Subscription,interval, map, take } from 'rxjs';
import{filter}from 'rxjs/operators'
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit,OnDestroy {

  public  intervalSubs: Subscription;
  constructor() {

    this.intervalSubs=this.retornaIntervalo()
    .subscribe(
      valor=>console.log(valor)
    )
  }

  ngOnDestroy(): void {
      this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaIntervalo():Observable<number>{
    return interval(500)
                    .pipe(
                      take(0),
                      map(x=>x+1),
                      filter(x=> (x % 2 ===0)?true: false)
                    );
  }
}
