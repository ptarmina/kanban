import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lane',
  templateUrl: './lane.component.html',
  styleUrls: ['./lane.component.scss']
})
export class LaneComponent implements OnInit {

@Input() laneData;



  constructor() { }

  ngOnInit() {

  }

}
