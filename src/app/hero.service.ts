import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);// we return a single value of Heroes
    this.messageService.add('The Hero Service Fetched in Hero');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // @ts-ignore
    const hero: Hero = HEROES.find(h => h.id === id);
    this.messageService.add(`we grabbed hero with id ${id}`);
    return of(hero);
  }


}
