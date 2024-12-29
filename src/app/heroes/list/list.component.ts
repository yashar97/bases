import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heroNames: string[] = ['spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHeroe?: string;

  removeLastHero(): void {
    this.deletedHeroe = this.heroNames.pop();
  }

}
