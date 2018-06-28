import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { ceroIzq } from '../pages/utiles/utiles.service';


@Directive({
  selector: '[appEditRowTable]'
})
export class EditRowTableDirective {
  elemento: ElementRef;
  etiqueta; inputEdit; 
  formato: String; // formato devuelto, esto se  asigna en la clase del input | numero , cantidad, cantidad-cadena 

  constructor( private _element: ElementRef, private render: Renderer2 ) {
    this.elemento = _element;
  }

  @HostListener('click', ['$event']) onClick($event) {
    this.etiqueta = this.elemento.nativeElement.children[0];
    this.inputEdit = this.elemento.nativeElement.children[1];

    this.render.addClass(this.etiqueta, 'invisible');
    this.render.removeClass(this.inputEdit, 'invisible');
    
    this.inputEdit.focus();
    this.inputEdit.select();

    this.formato = this.inputEdit.getAttribute('attr.data-formato');

  }

  @HostListener('focusout', ['$event.target'])
    onFocusout(target: any) {
      
      // const valorInput = isNaN(parseFloat(this.inputEdit.value)) ? this.inputEdit.value : parseFloat(this.inputEdit.value).toFixed(2);
      const valorInput = this.inputEdit.value;

      this.render.setProperty(this.etiqueta, 'textContent', this.setValFormato(valorInput));

      this.render.addClass(this.inputEdit, 'invisible');
      this.render.removeClass(this.etiqueta, 'invisible');
  }

  setValFormato (val: any): any {
    let rpt;
    switch (this.formato) {
      case 'numero':
        rpt = isNaN(parseFloat(val)) ? val : parseFloat(val).toFixed(2);
        break;
      case 'cantidad-cadena':
        rpt = isNaN(parseFloat(val)) ? val :  ceroIzq(val, 2);
        break;
    }

    return rpt;
  }
}
