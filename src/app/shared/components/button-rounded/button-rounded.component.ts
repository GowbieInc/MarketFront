import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button-rounded',
    templateUrl: './button-rounded.component.html',
    styleUrls: ['./button-rounded.component.css']
})
export class ButtonRoundedComponent implements OnInit {

    @Input() id: string;
    @Input() type: string;
    @Input() disabled?: boolean = false;
    
    @Output() click = new EventEmitter();

    constructor(
    ) { }

    ngOnInit() {
    }

    public handleClick($event) {
        this.click && this.click.emit($event);
    }
}
