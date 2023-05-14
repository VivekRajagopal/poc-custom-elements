import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title = 'app-angular';

  count = signal(0);

  clicked(ev: Event) {
    console.log('clicked', ev);
    this.count.update((v) => v + 1);
  }

  get label() {
    return 'clicked ' + this.count() + ' times';
  }
}
