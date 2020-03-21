import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() selectedNavigationEvent : EventEmitter<string> = new EventEmitter<string>();

    onNavigationSelection(selector: string) {
        this.selectedNavigationEvent.emit(selector);
    }
}