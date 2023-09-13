import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  cambiarNombre():void {
    this.name = 'Spiderman';
  }

  cambiarEdad():void {
    this.age = 25;
  }

  get capitalizedName():string {
    return this.name.toUpperCase();
  }


  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

  pruebaMetodo():void {
    this.name = 'Prueba';
    this.age = 0;
  }
}
