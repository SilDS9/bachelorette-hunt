import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Clue } from '../_models/clue';
import { CluesService } from '../_services/clues.service';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {

  qrResultString: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(resultString);
  }

}
