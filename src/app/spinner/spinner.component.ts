import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color, Kind } from '../app.component';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() color: Color;
  @Input() kind: Kind;
  // In order to expose the Enum to the HTML template
  colors = Color;
  kinds = Kind;
}
