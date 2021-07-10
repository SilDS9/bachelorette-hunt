import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clue } from '../_models/clue';
import { CluesService } from '../_services/clues.service';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.scss']
})
export class ClueComponent implements OnInit {

  clue: Clue;
  id: string;
  fun_facts = {
    1: "In media, un pene umano eiacula circa 7000 volte nell'arco di una vita",
    2: "Il record di masturbazione maschile è di 9 ore e 58 minuti",
    3: "Durante un eiaculazione, lo sperma viaggia alla velocità di 45 km/h",
    4: "Il record di eiaculazione lo detiene Hortz Scholts, che riuscì a raggiungere 6 metri di distanza con un singolo getto. Schultz detiene anche il record per l'eiaculazione più alta: arrivò a 4 m, oltre il primo piano di un palazzo",
    5: "Un uomo su 400 è talmente flessibile da poter praticare l'autofellatio"
  }

  constructor(private activatedRoute: ActivatedRoute,
              private clueService: CluesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.clue = this.clueService.getClue(this.id);
         
      console.log(this.clue);
    })
  }

}
