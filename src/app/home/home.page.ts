import { FormsModule } from '@angular/forms';
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
    public Gasolina: number | undefined;
    public Alcool: number | undefined;
    public media: number | undefined;
    public situacao: string = "";
    constructor(private alertController: AlertController) { }
    calcularGasolina() {
    if (this.Gasolina && this.Alcool) {
  this.media = (this.Alcool / this.Gasolina) ;
  this.situacao = this.media >= 0.70 ? 'Gasolina é a melhor opção' : 'Alcool é melhor opção';
  } else {
    this.alerta()
  }
}

async alerta() {
  const alert = await this.alertController.create({
  header: 'Atenção',
  message: 'Por favor, digite os dois preços para sabermos qual vale mais a pena',
  buttons: ['OK']
});

  await alert.present();
}}