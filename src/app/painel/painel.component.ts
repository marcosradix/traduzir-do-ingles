import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/model/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
areaTexto:string;
public frases: Array<Frase> = FRASES;
  constructor() { console.log(this.frases)}

  ngOnInit() {
  }
  teste(){
    alert('Bootstrap ok');
    console.log(this.areaTexto);
  }


}
