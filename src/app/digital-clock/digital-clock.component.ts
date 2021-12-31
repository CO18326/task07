import { Component, OnInit } from '@angular/core';
//import * as moment from 'moment';
import * as moment from 'moment-timezone'

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  time:any;
  zone:string;
  zones:string[];
  constructor() {
    this.zone=moment.tz.guess();
    this.zones=moment.tz.names();
   }

  ngOnInit(): void {
  this.time=moment().tz(this.zone).format('hh:mm:ssA');
  setInterval(()=>{
    this.time=moment().tz(this.zone).format('hh:mm:ssA');

  },1000)
  }

}
