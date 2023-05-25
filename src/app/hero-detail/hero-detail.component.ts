import {Component, Input} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero; // this is the property that will receive data from other component

  constructor(private heroService: HeroService, private rout: ActivatedRoute,private location: Location) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    const id = Number(this.rout.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(x => this.hero);
  }
  goBack():void{
    this.location.back();
  }
}
