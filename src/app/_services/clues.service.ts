import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clue } from '../_models/clue';

@Injectable({
  providedIn: 'root'
})
export class CluesService {

  constructor(private http: HttpClient) { }

  clues = {
    1: "In Olanda ti farà compagnia anche la vecchia e cara Maria",
    2: "Penso che un sogno così non ritorni mai più. Mi dipingevo le mani e la faccia di ...",
    3: "La voglia scalpitava, strillava, tuonava, cantava da notte fonda nel petto di Paola oh Paola. La noia quella sera era troppa e cercava, chiamava duecento principi e invece lei era la dama del castello. Il tuo è un ...",
    4: "Fa schiuma ma non è sapone, sbrigati a cercare quest'ultimo colore!"
  }

  getClue(id: string): Clue {
    return this.clues[id];
  }

}
