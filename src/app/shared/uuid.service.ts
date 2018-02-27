import { Injectable } from '@angular/core';

@Injectable()
export class UuidService {

  constructor() { }

	getUuid(){
		return Math.floor((1 + Math.random()) * 0x10000000).toString(16)
	}

}
