import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})
//Los pipes se declaran en el modulo como si fuera un componente
export class MayusculasPipe implements PipeTransform{
    
    transform(valor: string, enMayus: boolean = true): string{
        if(enMayus)
         return valor.toUpperCase();
        else
         return valor.toLowerCase();
    }
}