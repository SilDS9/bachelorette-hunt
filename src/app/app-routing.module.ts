import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ClueComponent } from './clue/clue.component';
import { FirstClueComponent } from './first-clue/first-clue.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'scanner', component: QrScannerComponent},
  {path: 'first-clue', component: FirstClueComponent},
  {path: 'clue/:id', component: ClueComponent},
  {path: 'challenge/:id', component: ChallengeComponent},
  {path: 'greetings', component: GreetingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
