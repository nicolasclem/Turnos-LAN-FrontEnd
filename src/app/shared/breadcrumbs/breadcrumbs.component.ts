import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  public title:string | undefined;

  public titleSubs$: Subscription;


  constructor(private router: Router) {
    this.titleSubs$= this.getDataRoute()
                      .subscribe( ({title})=>{
                        this.title= title;
                        document.title=`LAN -${title}`;
                        console.log('Desde observable' ,this.title);
                      }
                      );
  }

  ngOnDestroy(): void {
      this.titleSubs$.unsubscribe();
  }

  getDataRoute(){
     return this.router.events
    .pipe(
      filter((e): e is ActivationEnd => e instanceof ActivationEnd && e.snapshot.firstChild==null),
      map((e:ActivationEnd) => e.snapshot.data)
    )

  }
}
