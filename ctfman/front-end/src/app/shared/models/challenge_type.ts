import { Component, Input } from '@angular/core';

const Size = {
  XLarge: 'xl' as 'xl',
  Large: 'l' as 'l',
  Medium: 'm' as 'm',
  Small: 's' as 's'
}
type Size = (typeof Size)[keyof typeof Size];
export { Size };

@Component({
    // moduleId: module.id,
    selector: 'app-size-select',
    template: `
        <select [ngModel]="selectedSize">
            <option value="{{size.XLarge}}">Extra Large</option>
            <option value="{{size.Large}}">Large</option>
            <option value="{{size.Medium}}">Medium</option>
            <option value="{{size.Small}}">Small</option>
        </select>    
    `
})
export class SizeSelectComponent { 
    @Input() selectedSize: Size;

    // Bonus - see how the constants define 
    // the values in the markup above
    size = Size;
}