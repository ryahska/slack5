import { Subscription } from 'rxjs';
import { MediaChange ,MediaObserver} from '@angular/flex-layout';
import { Component ,OnInit,OnDestroy} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy{
  title='slack';
  mediaSub:Subscription;
  deviceXs:boolean;
  constructor(public mediaObserver:MediaObserver)
  {}
  ngOnInit(){
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
     
      this.deviceXs= (result.mqAlias==='sm')? true:false;
    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
 }