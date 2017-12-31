import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/model/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
areaTexto:string="";
instrucao:string ="Traduza a frase: ";
indice: number =0;
public frases: Array<Frase> = FRASES;
progresso:number=0;
acertos:number = 0;
  constructor() {}

  ngOnInit() {
  }
  incrementarProgresso(){
    if(this.indice <= (this.frases.length -1)){
      if(this.frases[this.indice].frasePtBr.toLowerCase() == this.areaTexto.toLowerCase()){
        this.acertos++;
        alert("Você acertou " +this.frases[this.indice].frasePtBr);
      }else{
        if(this.indice <= (this.frases.length -1)){
          alert("Você errou " +this.frases[this.indice].frasePtBr);
        }
      }
      if(this.indice < (this.frases.length -1)){
        this.indice++;
          this.progresso += (100 / (this.frases.length-1));
      }else{
        this.indice = 0;
      this.progresso = 0;
      }
    }
    this.areaTexto = "";
  }
  resetarPartida(){
    this.areaTexto = "";
    this.acertos = 0;
    this.indice = 0;
    this.progresso = 0;
  }
}
