import { Component, OnInit, ElementRef, Renderer2, Input, OnChanges, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit, OnChanges {
  @Input('AbriDialog') AbriDialog = false;
  @Output('AbriDialogRpt') public AbriDialogRpt = new EventEmitter; // emite el evento cuando el valor cambia internamente
  @Input('CerrarEsc') CerrarEsc = false; // cierre al presionar esc
  @Input('CerrarClickFuera') CerrarClickFuera = false; // cierra al hacer click afuera
  @Input('OcuparTodoElContenedor') OcuparTodoElContenedor = false; // ocupa todo el contenedor

  @ViewChild('somedialog') dialog: ElementRef;
  @ViewChild('contenedor') contenedor: ElementRef;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(e: KeyboardEvent) {
    if (e.keyCode === 27) {
      if ( this.CerrarEsc ) { this.cerrarDialog(); }
    }
  }

  constructor( private renderer: Renderer2) {
  }

  ngOnInit() {
    if ( this.OcuparTodoElContenedor ) { this.renderer.addClass(this.contenedor.nativeElement, 'dialogcontent--maxWith'); }
  }

  ngOnChanges(): void {
    if (this.AbriDialog) {
      this.abrirDialog();
    } else {
      this.cerrarDialog();
    }
  }

  private cerrarDialog(): void {
    if (!this.dialog.nativeElement.classList.contains('dialog--open')) {return; }
      this.renderer.removeClass(this.dialog.nativeElement, 'dialog--open');
      this.renderer.addClass(this.dialog.nativeElement, 'dialog--close');
      this.AbriDialog = false;
      this.AbriDialogRpt.emit(false);
  }

  private abrirDialog(): void {
    this.renderer.removeClass(this.dialog.nativeElement, 'dialog--close');
    this.renderer.addClass(this.dialog.nativeElement, 'dialog--open');
  }

  focusElment(event) {
    if ( event.target.className === 'dialog__overlay' ) {
      if ( this.CerrarClickFuera) { this.cerrarDialog(); }
    }
  }
}
