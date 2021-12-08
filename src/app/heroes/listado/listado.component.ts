import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroesEliminados: string = '';

  borrarHeroe() {
      console.log('Borrando..');
      const heroeBorrado = this.heroes.shift();
      this.heroesEliminados = heroeBorrado || '';
      console.log(`Herioe borrado ${heroeBorrado}`);
  }

}
