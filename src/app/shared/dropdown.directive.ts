import { Directive, HostBinding, HostListener } from '@angular/core';

/* 
Add functionailty that adds a CSS class to the element it sits upon once clicked.
And remove the CSS class once the element is clicked again.
e.g.: add "open" to <div class="btn-group open">
*/
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen : boolean = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}