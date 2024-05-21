import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): any {
        return (value) ? 'Puede volar' : 'no puede volar' 
    }
}