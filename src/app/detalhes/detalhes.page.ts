import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetalhesPage implements OnInit {

  public nome:string="";

  constructor(private route:ActivatedRoute() {
    
  }) { }

  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get("nome") || '';
  }

}
