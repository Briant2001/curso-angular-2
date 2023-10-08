import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

    transform(value: string,toUpper:Boolean = false): any {

        return (toUpper)?value.toUpperCase():value.toLowerCase()  
    }
}