import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class ClanFliyPipe implements PipeTransform {
    
    transform(isCnaFly:Boolean=false): any {
        return (isCnaFly) ? "Vuela":"No vuela"
    }
}