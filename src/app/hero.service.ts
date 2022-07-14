import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
<<<<<<< HEAD
    this.messageService.add('HeroService: feched heroes');
=======
    this.messageService.add('HeroService: fetched heroes');
>>>>>>> 30f2aa29f687f40b3c7b50b28431f7167990369f
    return heroes;
  }
}
