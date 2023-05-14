import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  readonly title = "app-angular-v6";

  count = 0;

  clicked(ev: Event) {
    console.log("clicked", ev);
    ++this.count;
  }

  get label() {
    return "clicked " + this.count + " times";
  }
}
