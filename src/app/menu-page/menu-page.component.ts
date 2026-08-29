import { Component, inject } from '@angular/core';

import { MotywService } from '../core/motyw.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css',
})
export class MenuPageComponent {
  protected readonly motyw = inject(MotywService);
}
