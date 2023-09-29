import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() nome:string = ''

  constructor() {
	}

  ngOnInit(): void {
		this.nome = this.nome + "x"
  }

	ngOnChanges(): void {

	}

}
