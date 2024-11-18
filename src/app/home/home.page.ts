import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  public nome:string = "";
    constructor(private router:Router) { }
    verificar() {
      this.router.navigate(["/detalhes", this.nome])
    }
  } 


