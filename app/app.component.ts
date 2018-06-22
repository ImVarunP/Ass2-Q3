import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Marvellous Infosystems!&nbsp;<input type="text">
  </h1>
</div>`,
  styles: [`input{background:blue}`]
})
export class AppComponent {
  title = '';
}
