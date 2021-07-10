import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  num_cards = {
    1: "Scegli una sfida tra le carte che troverai nella busta che hai ricevuto",
    2: "La strada è ancora in salita, scegli due carte",
    3: "Sei a metà strada, pesca tre carte senza guardare",
    4: "Almost there, hang on! Tu e le tue amiche scegliete una carta a testa",
    5: "Se non l'avessi capito, non hai più scelta...Prendile tutte!"
  }
  id: string;
  int_id: number;
  gifts = {1: "fermaglio", 2: "giarrettiera", 3: "spilla", 4: "anello", 5: "bracciale" }
  res = new FormControl('');
  titles = {
    1: "Qualcosa di prestato",
    2: "Qualcosa di nuovo",
    3: "Qualcosa di blu",
    4: "Qualcosa di vecchio",
    5: "Qualcosa di regalato"
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.int_id = parseInt(this.id);
      });
  }

  verifyChallenge(response: string) {
    this.router.navigateByUrl("clue/" + this.id);
    
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
