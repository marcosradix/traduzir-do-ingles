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
tentativas: number= 3;
public frases: Array<Frase> = FRASES;
progresso:number=0;
acertos:number = 0;
  constructor() {}

  ngOnInit() {
  }
  verificaResposta(){
    if(this.indice <= (this.frases.length -1)){
      if(this.frases[this.indice].frasePtBr.toLowerCase() == this.areaTexto.toLowerCase()){
        this.acertos++;
        alert("Você acertou : " +this.frases[this.indice].frasePtBr);
      }else{
        this.tentativas--;
          alert("Você errou : " +this.frases[this.indice].frasePtBr);
          if(this.tentativas === -1){
            alert("Você perdeu e a rodada será reiniciada!");
            this.tentativas = 3;
            this.indice = this.frases.length;
            this.progresso = 0;
          }
      }
      if(this.indice < (this.frases.length -1)){
        this.indice++;
        this.progresso += (100 / (this.frases.length-1));
      }else{
        if(this.acertos === this.frases.length){
          alert("Você venceu, acertou : " +this.acertos+" de "+ this.frases.length);
        }else{
          this.tentativas = 3;
            alert("Você perdeu, acertou : " +this.acertos+" de "+ this.frases.length);
        }
        this.indice = 0;
        this.progresso = 0;
        this.acertos =0;
      }
    }
    this.areaTexto = "";
  }
  resetarPartida(){
    this.areaTexto = "";
    this.indice = 0;
    this.progresso = 0;
    this.tentativas =0;
  }
}
