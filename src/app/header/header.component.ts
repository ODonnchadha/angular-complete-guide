import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectedNavigation : EventEmitter<string> = new EventEmitter<string>();

    onNavigationSelection(selector: string) {
        this.selectedNavigation.emit(selector);
    }
}