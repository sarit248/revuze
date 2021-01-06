import { Component } from '@angular/core';

export enum Color {
  Blue,
  Green,
  Purple,
}

export enum Kind {
  Sync,
  Dots,
  Fan,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  colors = Color;
  kinds = Kind;
  selectedColor: Color = Color.Blue;
  selectedKind: Kind = Kind.Sync;

  onClickColor(color: Color): void {
    this.selectedColor = color;
  }

  onClickKind(kind: Kind): void {
    this.selectedKind = kind;
  }
}
