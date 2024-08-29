import { Component } from '@angular/core';
import { HomepageModule } from '../modules/homepage/homepage.module';


@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [HomepageModule],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss'
})
export class IndexPageComponent {

}
