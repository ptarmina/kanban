import { Component, OnInit, Input } from '@angular/core';
import { UuidService } from '../../shared/uuid.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {




	default =
	{
	"board": [{
		"id": this.uuid.getUuid(),
		"title": "board title",
		"lanes": [
			{
				"id": this.uuid.getUuid(),
				"title": "TODO",
				"cards": [{
						"id": this.uuid.getUuid(),
						"title": "lane 1 card 1"
					},
					{
						"id": this.uuid.getUuid(),
						"title": "lane 1 card 2"
					}]
			},
			{
				"id":this.uuid.getUuid(),
				"title": "WIP",
				"cards": [{
						"id": this.uuid.getUuid(),
						"title": "lane 2 card 1"
					},
					{
						"id": this.uuid.getUuid(),
						"title": "lane 2 card 2"
					}]
			},
			{
				"id": this.uuid.getUuid(),
				"title": "COMPLETE",
				"cards": [{
						"id": this.uuid.getUuid(),
						"title": "lane 3 card 1"
					},
					{
						"id":this.uuid.getUuid(),
						"title": "lane 3 card 2"
					}]

			}
		]
	}]
}


  constructor( public uuid:UuidService) { }

  ngOnInit() {
  }

	createBoard(){

	}


}


















