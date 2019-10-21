import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-input-grey',
  templateUrl: './grid-input-grey.component.html',
  styleUrls: ['./grid-input-grey.component.css']
})
export class GridInputGreyComponent implements OnInit {

  @Input() label: string;
  @Input() for: string;
  @Input() informative: string;
  @Input() valid: boolean;

  constructor() { }

  ngOnInit() {
    if (typeof this.valid === "undefined") {
      this.valid = true;
    }
  }

}
