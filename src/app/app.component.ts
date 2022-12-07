import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modalApi';

  optionMostrar: boolean = false;
  optionDica: boolean = false;

  fechar() {
    this.optionMostrar = false;
  }
  option(): void {
    this.optionMostrar = !this.optionMostrar;
  }

  fecharDica() {
    this.optionDica = false;
  }
  dica(): void {
    this.optionDica = !this.optionDica;
  }
}
