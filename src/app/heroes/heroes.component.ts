import {Component} from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heros";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // hero: string = 'Big Boy';

  hero: Hero = {
    id: 1,
    name: 'Big Boy'
  }

  // heroes: Hero[] = HEROES; // the type is a list of the interface = the list
  // we created in mock-heroes.ts

  heroes: Hero[] = [];

  selectedHero ?: Hero; // ? means it can unassigned
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(x => {
        console.log(x);
        this.heroes = x;
      })
  }

  onSelectedHero(hero: Hero): void {
    // console.log(this.hero);
    console.log(this.selectedHero);
    this.selectedHero = hero;

    this.messageService.add('You selected hero with id $(hero.id) and name $(hero.name)');
  }


}
