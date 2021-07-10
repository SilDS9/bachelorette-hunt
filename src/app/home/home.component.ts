import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('hello', [
      transition(
        ':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('1s', style({transform: 'translateY(0%)', opacity: 1}))
        ]
      ),
    ]),
    trigger('welcome', [
      transition(
        ':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('1s 1s', style({transform: 'translateY(0%)', opacity: 1}))
        ]
      ),
    ]),
    trigger('ruleAnimation', [
      transition('*=>*', [
        query(':enter', style({opacity: 0})),
        query(':enter', stagger('1s', [
          animate('1s 2s', style({opacity: 1}))
        ]))
      ])
    ]),
    trigger('start', [
      transition(
        ':enter', [
          style({opacity: 0}),
          animate('1s 7s', style({opacity: 1}))
        ]
      ),
    ])
  ]
})
export class HomeComponent implements OnInit {
  rules = [
    "Oggi per te ho organizzato una caccia al tesoro, in cui dovrai affrontare delle sfide per trovare tutto ciò di cui una sposa ha bisogno",
    "Ti accompagnerò passo passo in questa ricerca",
    "Le regole sono semplici: ti darò un indizio su un colore da trovare per scoprire le sfide che ti attendono",
    "Al termine di ogni sfida, riceverai una ricompensa, che ti servirà per avere l'indizio successivo, insieme ai miei preziosi insegnamenti, fondamentali per affrontare il resto della tua vita con lo stesso pene",
    "Per iniziare questa avventura, vai ad indossare la tua armatura!"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
