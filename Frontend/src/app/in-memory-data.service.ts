import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({providedIn: 'root'})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'All Might' },
      { id: 2, name: 'Deku' },
      { id: 3, name: 'Naruto' },
      { id: 4, name: 'Ichigo' },
      { id: 5, name: 'Guts' },
      { id: 6, name: 'Goku' },
      { id: 7, name: 'Superman' },
      { id: 8, name: 'Shisui' },
      { id: 9, name: 'Nagato' },
      { id: 10, name: 'Madara Uchiha' },
    ];
    return {heroes};
  }
  getId(heroes: Hero[]): number {
    return heroes.length > 0 ?
    Math.max(...heroes.map(hero => hero.id)) + 1: 
    100;
  }
}